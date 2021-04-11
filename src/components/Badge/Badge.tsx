import React from "react";
import "./badge.scss"

interface BadgeProps {
    children: number,
}

const Badge: React.FC<BadgeProps> = ({children}) => {
    return (
        <div className="base">
            {children}
        </div>
    )
}

export default Badge