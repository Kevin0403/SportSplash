import React, { useId } from "react";

function Input(
  { label, divClass = "", type = "text", className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className={`${divClass} mt-1`}>
      {label && (
        <label className="label-text" htmlFor={id}>
          {label}
        </label>
      )}
      <div >
        <input
          type={type}
          className={`input input-bordered w-full ${className}`}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    </div>
  );
}

export default React.forwardRef(Input);
