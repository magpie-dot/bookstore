import React from "react";
import "./input.scss"

interface InputProps {
    variant: string,
    placeholderText: string,
    onValueChange: () => void
}

const Input: React.FC<InputProps> = ({variant, onValueChange, placeholderText}) => {
    return (
        <input type="text" className={variant} onChange={onValueChange} placeholder={placeholderText}/>
    )
}

export default Input