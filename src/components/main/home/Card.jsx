import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faStarHalfStroke, faBarsProgress} from '@fortawesome/free-solid-svg-icons'
import '../../../styles/home.css'
function Card() {
    return (
        <div>
            <div className="container-card">

                <div className="col-sm-4 " style={{"text-align" : "center"}}>
                    <span className="fa-stack fa-5x">
                    <FontAwesomeIcon icon={faStarHalfStroke} />

                    </span>

                    <div className="caption" >
                        <h3>Who Are We <br /></h3>
                        <p >We are a group of enthusiastic Electronics and Communication engineering students of N.I.T Jamshedpur.</p>
                        <p ></p>
                    </div>
                </div>

                <div className="col-sm-4 "  style={{"text-align":"center"}}>
					<span className="fa-stack fa-5x ">
                    <FontAwesomeIcon icon={faBarsProgress} />
                   
                </span>
						<div className="caption">
							<h3 >What We Do<br/></h3>
							<p >We kindle the spark in the minds of young technocrats and challenge them to approach a problem
							 uniquely .</p>
							<p ></p>
						</div>
				</div>
                <div className="col-sm-4 "  style={{"text-align":"center"}}>
					<span className="fa-stack fa-5x ">
                    <FontAwesomeIcon icon={faCalendar} />
                </span>
						<div className="caption">
							<h3 >Events<br/></h3>
							<p >SECE organised various events which stimulated the brains of young technocrats and promoted a
							 competitive spirit between them.</p>
							<p ></p>
						</div>
				</div>

            </div>
        </div>
    )
}

export default Card