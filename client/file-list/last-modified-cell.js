import React, { PropTypes } from 'react'
import { css } from 'glamor'

import {
	FILE_MODIFIED_WIDTH,
} from '../style-constants'

const styles = {
	size: css({
		flex: `0 0 ${FILE_MODIFIED_WIDTH}px`,
	}),
}

const displayDate = (isoDate) => {
	return new Date(isoDate).toLocaleString()
}

const LastModifiedCell = ({ isoDate }) => (
	<div className={styles.size}>
		{displayDate(isoDate)}
	</div>
)

LastModifiedCell.propTypes = {
	isoDate: PropTypes.string.isRequired,
}

export default LastModifiedCell
