import React, { useId } from "react";

function Input(
  { label, divClass = "", type = "text", className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className={`${divClass} mt-2`}>
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400" htmlFor={id}>
          {label}
        </label>
      )}
      <div >
        <input
          type={type}
          className={` h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    </div>
  );
}

export default React.forwardRef(Input);
