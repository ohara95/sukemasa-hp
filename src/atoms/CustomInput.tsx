import React, { FC } from "react";

type Props = {
  type:
    | "text"
    | "number"
    | "email"
    | "password"
    | "submit"
    | "image"
    | "date"
    | "radio"
    | "checkbox"
    | "button"
    | "file";
  onChange: (e: React.ChangeEvent<EventTarget & HTMLInputElement>) => void;
  value: string | number;
  placeholder?: string;
  style?: { [param: string]: string | number };
};

const CustomInput: FC<Props> = ({
  type,
  onChange,
  value,
  placeholder,
  style,
}) => (
  <input
    className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none "
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    style={style}
  />
);

export default CustomInput;