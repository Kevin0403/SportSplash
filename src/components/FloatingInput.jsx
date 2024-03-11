import React, { useId } from "react";

function FloatingInput(
    {
        type = "text",
        name = "",
        placeholder = " ",
        label ,
        className = "",
        readonly = false,
        error,
        ...props
    }, ref
) {

    const id = useId();

  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        type={type}
        name=   {name}
        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0  appearance-none focus:outline-none  ${className} ${readonly ? 'cursor-text ' : 'border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500  focus:ring-0 focus:border-blue-600 peer'}`}
        placeholder={placeholder}
        ref={ref}
        {...props}
        id={id}
        readOnly={readonly}
      />
      {label && <label
        htmlFor={id}
        className={`peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-20 origin-[0]   ${readonly ? '' : 'peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'}`}
      >
        {label}
      </label>}
      {error && <div className="text-red-500 text-xs absolute">{error.message}</div>} 
    </div>
  );
}

export default React.forwardRef(FloatingInput);
