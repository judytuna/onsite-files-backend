import React, { PropTypes } from 'react'
import { css } from 'glamor'

import {
	FILE_SIZE_WIDTH,
} from '../style-constants'

const styles = {
	size: css({
		flex: `0 0 ${FILE_SIZE_WIDTH}px`,
	}),
}

const displaySizeCellsize = (size) => {
	const sizeInGb = size / Math.pow(10, 9)
	if (sizeInGb >= 1) {
		return sizeInGb.toFixed(2) + 'GB'
	}
	const sizeInMb = size / Math.pow(10, 6)
	if (sizeInMb >= 1) {
		return sizeInMb.toFixed(2) + 'MB'
	}
	const sizeInKb = size / Math.pow(10, 3)
	if (sizeInKb >= 1) {
		return sizeInKb.toFixed(2) + 'KB'
	}

	return size.toFixed(2) + 'B'
}

const SizeCell = ({ size }) => (
	<div className={styles.size}>
		{size === 0 ? '' : displaySizeCellsize(size)}
	</div>
)

SizeCell.propTypes = {
	size: PropTypes.number.isRequired,
}

SizeCell.defaultProps = {
	size: 0,
}

export default SizeCell
