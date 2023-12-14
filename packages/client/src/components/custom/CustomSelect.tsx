import { LegacyRef, ChangeEventHandler, forwardRef, ForwardedRef } from "react";

type CustomSelectProps = {
  id?: string;
  name?: string;
  label?: string;
  options: string[];
  ref?: LegacyRef<HTMLSelectElement> | undefined;
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

const CustomSelect = forwardRef(
  (
    { id, name, label, options, value, onChange }: CustomSelectProps,
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <div>
        <label htmlFor={id || name}>{label}</label>
        <select
          className="outline-none bg-gray-900"
          id={id}
          name={name}
          value={value}
          ref={ref}
          onChange={onChange}
        >
          <option value=""></option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default CustomSelect;
