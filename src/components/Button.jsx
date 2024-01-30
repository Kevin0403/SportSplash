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
            <button className={`inline-flex w-full bg-button items-center justify-center rounded-md px-3.5 py-1.5 font-semibold leading-7 text-button  hover:bg-button-hover ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
            </button>
        </div>
    );
}

export default Button;
