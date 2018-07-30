import React from 'react'
import Avatar from './Avatar.js'
import MailIcon from '-!svg-react-loader?name=Mail!../../static/mail.svg';

import partyPic from './party1.png';

class Bio extends React.Component {
  render() {
    return (
			<main className="Bio">
				<p className="u-paddingBm">
          Friday, September 7th @ El Club
				</p>
				<div className="Bio-highlight u-marginBm">
					<ul>
						{/* <li>
							<a href="#">
								Get Tickets (coming soon)
							</a>
						</li>
						<li>
							<a href="#">
								Facebook Event (coming soon)
							</a>
						</li> */}
						<li>
							<a href="https://www.instagram.com/queerdanceparty/">
								Instagram
							</a>
						</li>
          </ul>
				</div>
				<img src={partyPic} className="u-responsiveImage" />
			</main>
    )
  }
}

export default Bio
