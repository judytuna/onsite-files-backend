import React, { PropTypes } from 'react'
import { css } from 'glamor'

import { BRAND_PRIMARY } from './style-constants'

const dropdownListClass = css({
	background: '#fff',
	boxShadow: '0 6px 12px rgba(0, 0, 0, 0.175)',
	position: 'absolute',
	top: '100%',
	right: '0',
	width: '150px',
	display: 'none',
	zIndex: 1,
	'.dropdown-wrapper:hover &': {
		display: 'block',
	},
})
export const dropdownItemClass = css({
	alignItems: 'center',
	justifyContent: 'stretch',
	color: '#444',
	cursor: 'pointer',
	display: 'flex',
	flex: '1 0 0%',
	padding: '0 10px',
	height: '35px',
	':hover': {
		color: BRAND_PRIMARY,
	},
})

const DropdownMenu = ({ children }) => (
	<div className={dropdownListClass}>
		{children}
	</div>
)

DropdownMenu.propTypes = {
	children: PropTypes.node,
}

export default DropdownMenu
