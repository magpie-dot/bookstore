import React from "react";
import "./button.scss"

interface ButtonProps {
    buttonName: string,
    styleButton: string,
    handleOnClick: () => void
}

const Button: React.FC<ButtonProps> = ({buttonName, styleButton, handleOnClick}) => {
    return (
        <button className={styleButton} onClick={handleOnClick}>
            {buttonName}
        </button>
    )
}

export default Button