import React, { useId } from "react";

function Select({ divClass = '', className = "", options, label, setbyid  = false, ...props }, ref) {
  const id = useId();

  return (
    <div className={`${divClass}`}>
      {label && (
        <label htmlFor={id} className="text-base font-medium text-gray-900">
          {label}
        </label>
      )}
      <div className="mt-2">
        <select
          className={` h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          {...props}
          id={id}
          ref={ref}
        >
          {options?.map((option) => (
            <option key={option.id} value={setbyid ? option.id : option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default React.forwardRef(Select);
