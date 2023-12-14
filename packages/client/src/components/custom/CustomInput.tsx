import { LegacyRef, ChangeEventHandler, forwardRef, ForwardedRef } from "react";

type CustomInputProps = {
  id?: string;
  type?: string;
  name?: string;
  label?: string;
  className?: string;
  placeholder?: string;
  ref?: LegacyRef<HTMLInputElement> | undefined;
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
};

const CustomInput = forwardRef(
  (
    {
      id,
      type,
      name,
      label,
      className,
      placeholder,
      value,
      defaultValue,
      onChange,
      error,
    }: CustomInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={className}>
        <label htmlFor={id || name} className="text-sm">
          {label}
        </label>
        <input
          type={type || "text"}
          className={`w-full py-2 px-3 outline-none bg-gray-900 border border-solid ${
            error ? "border-red-600" : "border-gray-900"
          } focus:border-gray-500 hover:shadow-md rounded-md`}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          ref={ref}
          onChange={onChange}
        />
        <p className="text-sm text-red-600 min-h-[20px]">{error}</p>
      </div>
    );
  }
);

export default CustomInput;
