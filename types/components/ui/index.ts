import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classNames?: string;
  label?: string;
}

export interface TagProps {
  label: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classnames?: string;
  onClickHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
}
