import React, { PropTypes } from 'react'
import { css } from 'glamor'

import { BRAND_PRIMARY } from './style-constants'

const styles = {
	button: css({
		borderRadius: '2px',
		color: '#fff',
		cursor: 'pointer',
		display: 'flex',
		fontFamily: 'bc, sans-serif',
		fontSize: '14px',
		height: '34px',
		padding: '0 15px',
	}),
	primary: css({
		background: BRAND_PRIMARY,
		border: 'none',
	}),
	outline: css({
		background: 'transparent',
		borderStyle: 'solid',
		borderWidth: '1px',
	}),
}

const Button = ({ children, onClick, type, color }) => {
	return (
		<button
			className={`${styles.button} ${styles[type]}`}
			onClick={onClick}
			style={
				type === 'outline' ?
					({
						borderColor: color,
						color,
						fill: color,
					}) :
					{}
			}
		>
			{children}
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['primary', 'outline']).isRequired,
	color: PropTypes.string,
}

Button.defaultProps = {
	type: 'primary',
}

export default Button
