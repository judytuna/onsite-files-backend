import React, { PropTypes } from 'react'

const INDENT_WIDTH = 15

const IndentCell = ({ depth }) => (
	<div style={{ flex: `0 0 ${depth * INDENT_WIDTH}px` }} />
)

IndentCell.propTypes = {
	depth: PropTypes.number.isRequired,
}

IndentCell.defaultProps = {
	depth: 0,
}

export default IndentCell
