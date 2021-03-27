import React from "react";
import "./badge.scss"

interface BadgeProps {
    numberOfBooks: number,
}

const Badge: React.FC<BadgeProps> = ({numberOfBooks}) => {
    return (
        <div className="base">
            {numberOfBooks}
        </div>
    )
}

export default Badge