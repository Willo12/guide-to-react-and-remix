import { FaEye } from "react-icons/fa";

interface RevealAnswerButtonProps {
  onClick: () => void;
}

const RevealAnswerButton = ({ onClick }: RevealAnswerButtonProps) => {
  return (
    <button
      type="button"
      className="group flex items-center text-xl uppercase leading-relaxed tracking-wide text-neutral-400 hover:text-neutral-100"
      onClick={onClick}
    >
      <FaEye className="mr-4 fill-neutral-400 group-hover:fill-neutral-100" />{" "}
      Reveal
    </button>
  );
};

export default RevealAnswerButton;
