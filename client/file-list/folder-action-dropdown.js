import React, { PropTypes } from 'react'
import { css } from 'glamor'

import { BRAND_PRIMARY } from '../style-constants'
import FileInput from '../file-input'
import DropdownArrowIcon from './icons/dropdown-arrow'
import DropdownMenu, { dropdownItemClass } from '../dropdown-menu'

const styles = {
	dropdownWrapper: css({
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		display: 'flex',
		height: '25px',
		width: '25px',
		':hover': {
			fill: BRAND_PRIMARY,
		},
	}),
}

const FolderActionDropdown = ({ addFolder, uploadFile }) => (
	<div
		className={`${styles.dropdownWrapper} dropdown-wrapper`}
		onClick={e => {
			e.stopPropagation()
		}}
	>
		<DropdownArrowIcon />
		<DropdownMenu>
			<FileInput
				onFilesSelected={({ files }) => {
					uploadFile(files[0])
				}}
			>
				{(onClick) => (
					<div className={dropdownItemClass} onClick={onClick}>
						Upload a File
					</div>
				)}
			</FileInput>
			<div className={dropdownItemClass} onClick={addFolder}>
				Add a Folder
			</div>
		</DropdownMenu>
	</div>
)

FolderActionDropdown.propTypes = {
	addFolder: PropTypes.func.isRequired,
	uploadFile: PropTypes.func.isRequired,
}

export default FolderActionDropdown
