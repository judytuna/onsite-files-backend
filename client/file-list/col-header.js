import React, { PropTypes } from 'react'
import { css } from 'glamor'

const styles = {
	colHeader: css({
		color: '#777',
		fontSize: '14px',
	}),
}

const ColHeader = ({ children, width }) => (
	<div
		className={styles.colHeader}
		{...css(
			width ?
				{ flex: `0 0 ${width}px` } :
				{ flex: '1 0 0' }
		)}
	>
		{children}
	</div>
)

ColHeader.propTypes = {
	children: PropTypes.node,
	width: PropTypes.number,
}

export default ColHeader
