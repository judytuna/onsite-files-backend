/* eslint-disable max-len*/
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { css } from 'glamor'

import { MAX_PAGE_WIDTH, PAGE_PADDING } from './style-constants'
import Button from './button'
import DropdownArrowIcon from './file-list/icons/dropdown-arrow'
import DropdownMenu, { dropdownItemClass } from './dropdown-menu'
import getProjects from './xhr/get-projects'
import createProject from './xhr/create-project'

const styles = {
	projectHeader: css({
		background: '#46aaa7',
		height: '90px',
		color: '#fff',
	}),
	content: css({
		alignItems: 'center',
		display: 'flex',
		height: '100%',
		justifyContent: 'space-between',
		maxWidth: MAX_PAGE_WIDTH,
		margin: '0 auto',
		padding: `0 ${PAGE_PADDING}px`,
	}),
	heading: css({
		margin: 0,
		fontWeight: 400,
	}),
	controls: css({
		display: 'flex',
		'& > *': {
			marginLeft: '10px',
		},
	}),
	projectNameForm: css({
		margin: '0 0 0 10px',
	}),
	projectNameInput: css({
		height: '34px',
		fontFamily: 'bc, sans-serif',
		fontSize: '14px',
		padding: '0 10px',
	}),
}

class ProjectNameForm extends Component {
	static propTypes = {
		draftProjectName: PropTypes.string,
		onSubmit: PropTypes.func.isRequired,
		onChange: PropTypes.func.isRequired,
		onBlur: PropTypes.func.isRequired,
	}

	render() {
		const { draftProjectName, onSubmit, onChange, onBlur } = this.props

		return (
			<form
				className={styles.projectNameForm}
				onSubmit={e => {
					e.preventDefault()

					onSubmit()
				}}
			>
				<input
					className={styles.projectNameInput}
					value={draftProjectName}
					onChange={e => onChange(e.target.value)}
					onBlur={() => onBlur()}
				/>
			</form>
		)
	}

	componentDidMount() {
		ReactDOM.findDOMNode(this).querySelector('input').focus()
	}
}

class ProjectHeader extends Component {
	static propTypes = {
		selectedProjectId: PropTypes.string,
		selectProject: PropTypes.func.isRequired,
	}

	constructor() {
		super()

		this.state = {
			projects: undefined,
			isDraftingProject: false,
			draftProjectName: '',
		}
	}

	render() {
		const { selectedProjectId, selectProject } = this.props
		const {
			projects,
			isDraftingProject,
			draftProjectName,
		} = this.state
		const selectedProject = projects ?
			projects.find(p => p._id === selectedProjectId) :
			undefined

		return (
			<div className={styles.projectHeader}>
				<div className={styles.content}>
					<h1 className={styles.heading}>
						{selectedProject && selectedProject.name}
					</h1>
					<div className={styles.controls}>
						{
							isDraftingProject ?
								<ProjectNameForm
									draftProjectName={draftProjectName}
									onSubmit={() => {
										// Create a project then immediately select it
										createProject({
											name: draftProjectName,
										})
											.then(project => {
												this.setState(state => ({
													projects: state.projects.concat(project),
													isDraftingProject: false,
												}))

												selectProject(project._id)
											})
									}}
									onChange={value => {
										this.setState({ draftProjectName: value })
									}}
									onBlur={() => {
										this.setState({ isDraftingProject: false })
									}}
								/> :
								<Button
									type="outline"
									color="#fff"
									onClick={() => {
										this.setState({
											draftProjectName: '',
											isDraftingProject: true,
										})
									}}
								>
									New Project
								</Button>
						}

						<div className="dropdown-wrapper">
							<Button type="outline" color="#fff">
								Go to...&nbsp;&nbsp;<DropdownArrowIcon />
							</Button>
							<DropdownMenu>
								{projects && projects.map(project => (
									<div
										key={project._id}
										className={dropdownItemClass}
										onClick={() => {
											selectProject(project._id)
										}}
									>
										{project.name}
									</div>
								))}
							</DropdownMenu>
						</div>
					</div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		getProjects()
			.then(projects => this.setState({ projects }))
	}
}

export default ProjectHeader
