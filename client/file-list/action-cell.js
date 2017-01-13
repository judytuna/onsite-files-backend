import React, { PropTypes } from 'react'
import { css } from 'glamor'

import {
	FILE_ACTION_WIDTH,
} from '../style-constants'

const styles = {
	action: css({
		flex: `0 0 ${FILE_ACTION_WIDTH}px`,
	}),
}

const ActionCell = ({ children }) => (
	<div className={styles.action}>
		{children}
	</div>
)

ActionCell.propTypes = {
	children: PropTypes.node,
}

export default ActionCell
