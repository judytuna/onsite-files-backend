import React, { PropTypes } from 'react'
import { css } from 'glamor'

import Button from './button'
import FileInput from './file-input'

const styles = {
	controls: css({
		display: 'flex',
		justifyContent: 'space-between',
	}),
	rightGroup: css({
		display: 'flex',
		justifyContent: 'flex-end',
		'& > *': {
			marginLeft: '10px',
		},
	}),
}

const Controls = ({ upload, addFolder, selectedProjectId }) => {
	return (
		<div className={styles.controls}>
			<Button
				type="outline"
				color="#888"
				onClick={() => {
					window.location = '/api/files/download-all'
				}}
			>
				Download all
			</Button>
			<div className={styles.rightGroup}>
				<Button
					onClick={() => {
						addFolder({ parentId: selectedProjectId })
					}}
				>
					New Folder
				</Button>
				<div>
					<FileInput onFilesSelected={({ files }) => upload({ file: files[0] })}>
						{(onClick) => <Button onClick={onClick}>Upload Files</Button>}
					</FileInput>
				</div>
			</div>
		</div>
	)
}

Controls.propTypes = {
	upload: PropTypes.func.isRequired,
	addFolder: PropTypes.func.isRequired,
	selectedProjectId: PropTypes.string,
}

export default Controls
