import React from 'react'
import partyPic from './qdp-logo.jpg';

class Header extends React.Component {
	render() {
		return (
			<div className="u-flex u-flexCol u-flexJustifyCenter Header u-marginVg">
				<img src={partyPic} className="Header-image u-responsiveImage" />
				{/* <h1 className="Header-headline">
					Queer Dance Party
				</h1>
				<h2 className="Header-subHeadline">
				</h2> */}
			</div>
		)
	}
}

export default Header
