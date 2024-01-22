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
        <div className={`${divClass} m-1`}>
            <button className={`inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-1.5 font-semibold leading-7 text-white hover:bg-black/80 ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
            </button>
        </div>
    );
}

export default Button;
