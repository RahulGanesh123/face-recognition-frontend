import React from 'react'
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import face from './face-detection.png'

function Logo() {
	return (
		<div className = 'ma4 mt0'>
			<Tilt className = "Tilt br2 shadow-2" options={{max: 65}} style={{height: 150, width: 150}}>
		      <div className = "pa3 logobg">
		      	<img style={{paddingTop: '5px'}} alt="Logo" src={face}/>
		      </div>
		    </Tilt>
		</div>
		)
}

export default Logo