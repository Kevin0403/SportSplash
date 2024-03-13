import React from 'react';

function Button({
    divClass = '',
    children,
    type = 'button', 
    bgColor = '',
    textColor = '',
    className = '',
    ...props
}) {
    return (
        <div className={`${divClass} m-1 `}>
            <button className={`btn btn-neutral ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
            </button>
        </div>
    );
}

export default Button;
