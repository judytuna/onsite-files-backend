/* eslint-disable max-len*/
import React, { PropTypes } from 'react'
import { css } from 'glamor'

import { MAX_PAGE_WIDTH, PAGE_PADDING } from './style-constants'

const styles = {
	mainContents: css({
		margin: '0 auto',
		maxWidth: `${MAX_PAGE_WIDTH}px`,
		padding: `35px ${PAGE_PADDING}px`,
	}),
}

const MainContents = ({ children }) => {
	return (
		<div className={styles.mainContents}>
			{children}
		</div>
	)
}

MainContents.propTypes = {
	children: PropTypes.node.isRequired,
}

export default MainContents
