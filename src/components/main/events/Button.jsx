import React from 'react'
import '../../../styles/button.css'



function Button(props) {
    return (
        <div>
            <a href = {props.gformlink} target = "_blank">
                <button className="button-29">
                    Register
                </button>
            </a>
        </div>

    )
}

export default Button