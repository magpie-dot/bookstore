import React from "react";
import "./input.scss"

interface InputProps {
    variant: string,
    placeholder: string,
    onChange: () => void
}

const Input: React.FC<InputProps> = ({variant, onChange, placeholder}) => {
    return (
        <input type="text" className={variant} onChange={onChange} placeholder={placeholder}/>
    )
}

export default Input