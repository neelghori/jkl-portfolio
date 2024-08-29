import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classNames?: string;
  label?: string;
}

export interface TagProps {
  label: string;
}
