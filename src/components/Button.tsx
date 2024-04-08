import React from "react";
import ButtonSvg from "../../public/images/common/ButtonSvg";

interface ButtonProps {
  handleClick: () => void;
  text: string;
}
const Button: React.FC<ButtonProps> = ({ handleClick, text }) => (
  <button
    className="relative inline-flex items-center justify-center h-11 px-7 m-10 text-xs font-bold uppercase tracking-wider hover:text-gray-300 cursor-pointer"
    onClick={handleClick}
  >
    {text}
    {ButtonSvg()}
  </button>
);

export default Button;
