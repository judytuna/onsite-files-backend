import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { css } from 'glamor'

import IndentCell from './file-list/indent-cell'
import {
	FILE_TYPE_WIDTH,
	ROW_HEIGHT,
} from './style-constants'
const INPUT_PADDING = 10

const styles = {
	newFolder: css({
		alignItems: 'center',
		display: 'flex',
		height: `${ROW_HEIGHT}px`,
		paddingLeft: `${FILE_TYPE_WIDTH - INPUT_PADDING}px`,
	}),
	input: css({
		fontFamily: 'bc, sans-serif',
		fontSize: '16px',
		height: '34px',
		padding: `2px ${INPUT_PADDING}px`,
		width: '400px',
	}),
}

class NewFolder extends Component {
	static propTypes = {
		depth: PropTypes.number.isRequired,
		onBlur: PropTypes.func.isRequired,
		onSave: PropTypes.func.isRequired,
	}

	static defaultProps = {
		depth: 0,
	}

	constructor() {
		super()

		this.state = { value: '' }
	}

	render() {
		const { depth, onSave, onBlur } = this.props

		return (
			<form
				className={styles.newFolder}
				onSubmit={e => {
					e.preventDefault()
					onSave({
						folderName: this.state.value,
					})
				}}
			>
				<IndentCell depth={depth} />
				<input
					className={styles.input}
					type="text"
					name="folderName"
					value={this.state.value}
					onChange={(e) => {
						this.setState({ value: e.target.value })
					}}
					onBlur={() => onBlur()}
				/>
			</form>
		)
	}

	componentDidMount() {
		findDOMNode(this).querySelector('input').focus()
	}
}

export default NewFolder
