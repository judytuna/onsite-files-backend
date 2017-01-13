import React, { Component, PropTypes } from 'react'
import { css } from 'glamor'

const styles = {
	fileInputWrapper: css({
		display: 'flex',
		flex: '1 0 0',
	}),
	actualFileInput: css({
		display: 'none !important',
	}),
}

class FileInput extends Component {
	static propTypes = {
		children: PropTypes.func.isRequired,
		multiple: PropTypes.bool,
		onFilesSelected: PropTypes.func,
	}

	static defaultProps = {
		onFilesSelected: () => {},
		multiple: false,
	}

	render() {
		const { children, multiple } = this.props

		return (
			<div className={styles.fileInputWrapper}>
				{children(this.handleUploadClick)}
				<input
					type="file"
					ref={ref => {
						this.fileInputRef = ref
					}}
					className={styles.actualFileInput}
					multiple={multiple}
					onChange={this.handleFileUpload}
				/>
			</div>
		)
	}

	handleFileUpload = event => {
		const { onFilesSelected } = this.props

		onFilesSelected({
			files: [].slice.call(event.target.files),
		})

		this.fileInputRef.value = ''
	}

	handleUploadClick = () => {
		this.fileInputRef.click()
	}
}

export default FileInput
