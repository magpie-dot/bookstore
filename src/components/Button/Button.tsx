import React from "react";
import "./button.scss"

interface ButtonProps {
    buttonName: string,
    variant: string,
    handleOnClick: () => void
}

const Button: React.FC<ButtonProps> = ({buttonName, variant, handleOnClick}) => {
    return (
        <button className={variant} onClick={handleOnClick}>
            {buttonName}
        </button>
    )
}

export default Button