import React, { useId } from "react";

function Input(
  { label, divClass = "", type = "text", className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className={`${divClass}`}>
      {label && (
        <label className="text-base font-medium text-gray-900" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          type={type}
          className={` h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    </div>
  );
}

export default React.forwardRef(Input);
