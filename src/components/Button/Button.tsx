import React from "react";
import "./button.scss"

const Button = (props: {buttonName: string, styleButton: string, handleOnClick: any}) => {
    return (
        <button className={props.styleButton} onClick={props.handleOnClick}>
            {props.buttonName}
        </button>
    )
}

export default Button