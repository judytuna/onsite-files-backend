import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { css } from 'glamor'

import createFileTree from './util/create-file-tree'
import getFiles from './xhr/get-files'
import createFolder from './xhr/create-folder'
import uploadFile from './xhr/upload-file'
import ProjectHeader from './project-header'
import MainContents from './main-contents'
import Controls from './controls'
import FileList from './file-list'
import NewFolder from './new-folder'

const styles = {
	app: css({
		fontFamily: 'bc, sans-serif',
	}),
	noProjects: css({
		fontSize: '24px',
		margin: '100px auto',
		textAlign: 'center',
	}),
}

const initialState = {
	selectedProjectId: undefined,
	addingFolderUnder: undefined,
	fileIdsByParent: {},
	files: {},
	expandedFolderIds: {},
}
class App extends Component {
	constructor() {
		super()

		this.state = initialState
	}

	render() {
		const {
			addingFolderUnder,
			files,
			fileIdsByParent,
			expandedFolderIds,
			selectedProjectId,
		} = this.state
		const fileTree = createFileTree({
			files,
			fileIdsByParent,
			projectId: selectedProjectId,
		})

		return (
			<div className={styles.app}>
				<ProjectHeader
					selectedProjectId={selectedProjectId}
					selectProject={this.selectProject}
				/>
				{
					selectedProjectId ? (
						<MainContents>
							<Controls
								selectedProjectId={selectedProjectId}
								upload={this.upload}
								addFolder={this.addFolder}
							/>
							<div style={{ height: '15px' }} />
							<FileList
								projectId={selectedProjectId}
								addFolder={this.addFolder}
								addingFolderUnder={addingFolderUnder}
								fileTree={fileTree}
								saveNewFolder={this.saveNewFolder}
								toggleFolder={this.toggleFolder}
								uploadFile={this.upload}
								getIsToggled={(folderId) => expandedFolderIds[folderId]}
							/>
							{
								addingFolderUnder === selectedProjectId && (
									<NewFolder
										onSave={this.saveNewFolder}
										onBlur={() => this.setState({ addingFolderUnder: undefined })}
									/>
								)
							}
						</MainContents>
					) : (
						<div className={styles.noProjects}>
							Create or select a project above to begin
						</div>
					)
				}
			</div>
		)
	}

	componentDidUpdate(prevProps, prevState) {
		const { selectedProjectId: projectId } = this.state

		if (projectId && projectId !== prevState.selectedProjectId) {
			getFiles({ projectId })
				.then(files => {
					this.setState({
						...initialState,
						selectedProjectId: projectId,
					})
					this.updateFiles({ files })
				})
		}
	}

	selectProject = (projectId) => {
		this.setState({ selectedProjectId: projectId })
	}

	updateFiles = ({ files, parentId }) => {
		const { selectedProjectId } = this.state
		const filesById = files.reduce((acc, file) => {
			acc[file._id] = file
			return acc
		}, {})

		this.setState(state => ({
			fileIdsByParent: {
				...state.fileIdsByParent,
				[parentId || selectedProjectId]: files.map(file => file._id),
			},
			files: {
				...state.files,
				...filesById,
			},
		}))
	}

	updateWithNewFile = ({ file, parentId }) => {
		const { selectedProjectId } = this.state
		const files = (this.state.fileIdsByParent[parentId || selectedProjectId] || [])
			.map(id => this.state.files[id])
			.concat(file)

		this.updateFiles({
			parentId,
			files,
		})
	}

	upload = ({ file, parentId }) => {
		const { selectedProjectId: projectId } = this.state

		uploadFile({ file, parentId, projectId })
			.then(({ file: uploadedFile }) => {
				this.updateWithNewFile({
					parentId: parentId || projectId,
					file: uploadedFile,
				})
			})
	}

	addFolder = ({ parentId }) => {
		if (parentId !== undefined) {
			this.fetchFolderContents(parentId)
		}

		this.setState({
			addingFolderUnder: parentId,
		})
	}

	saveNewFolder = ({ parentId, folderName }) => {
		const { selectedProjectId } = this.state

		createFolder({
			parentId,
			folderName,
			projectId: selectedProjectId,
		})
			.then(({ folder }) => {
				this.setState({
					addingFolderUnder: undefined,
				})

				this.updateWithNewFile({
					parentId: parentId || selectedProjectId,
					file: folder,
				})
			})
	}

	toggleFolder = (folderId) => {
		this.setState(state => ({
			expandedFolderIds: {
				...state.expandedFolderIds,
				[folderId]: !state.expandedFolderIds[folderId],
			},
		}))

		this.fetchFolderContents(folderId)
	}

	fetchFolderContents(folderId) {
		const { selectedProjectId: projectId } = this.state

		if (!this.state.fileIdsByParent[folderId]) {
			getFiles({ parentId: folderId, projectId })
				.then(files => {
					this.updateFiles({ files, parentId: folderId })
				})
		}
	}
}

ReactDOM.render(<App />, document.querySelector('#main'))
