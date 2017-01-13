import React, { PropTypes } from 'react'
import { css } from 'glamor'

import {
	BRAND_PRIMARY,
	ROW_HEIGHT,
} from '../style-constants'

const styles = {
	row: css({
		alignItems: 'center',
		borderBottom: '1px solid #eee',
		cursor: 'pointer',
		display: 'flex',
		height: `${ROW_HEIGHT}px`,
		'&:hover': {
			color: BRAND_PRIMARY,
			borderBottomColor: BRAND_PRIMARY,
		},
	}),
}
export const rowClass = styles.row

const Row = ({ children, ...otherProps }) => (
	<div {...otherProps} className={styles.row}>
		{children}
	</div>
)

Row.propTypes = {
	children: PropTypes.node,
}

export default Row
