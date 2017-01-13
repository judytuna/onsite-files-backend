import React, { PropTypes } from 'react'
import { css } from 'glamor'

import ClosedFolderIcon from './icons/closed-folder'
import FileIcon from './icons/file'
import OpenFolderIcon from './icons/open-folder'
import {
	FILE_TYPE_WIDTH,
	BRAND_PRIMARY,
} from '../style-constants'
import { rowClass } from './row'

const styles = {
	type: css({
		flex: `0 0 ${FILE_TYPE_WIDTH}px`,
		textAlign: 'center',
		fill: '#888',
		[`.${rowClass}:hover &`]: {
			fill: BRAND_PRIMARY,
		},
	}),
}

const TypeCell = ({ type, isToggled }) => {
	const folderContent = isToggled ?
		<OpenFolderIcon /> :
		<ClosedFolderIcon />

	return (
		<div className={styles.type}>
			{type === 'FILE' ? <FileIcon /> : folderContent}
		</div>
	)
}

TypeCell.propTypes = {
	type: PropTypes.oneOf(['FOLDER', 'FILE']).isRequired,
	isToggled: PropTypes.bool,
}

TypeCell.defaultProps = {
	depth: 0,
}

export default TypeCell
