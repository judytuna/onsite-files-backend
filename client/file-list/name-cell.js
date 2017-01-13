import React, { PropTypes } from 'react'
import { css } from 'glamor'

const styles = {
	name: css({
		flex: '1 0 0',
	}),
}

const NameCell = ({ children }) => (
	<div className={styles.name}>
		{children}
	</div>
)

NameCell.propTypes = {
	children: PropTypes.node.isRequired,
}

export default NameCell
