import { MessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<{ className?: string }>;
  button?: React.ReactElement<{ className?: string }>;
};

const Placeholder = ({
  label,
  icon = <MessageSquareWarning />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div
      className="
    flex-1 flex flex-col items-center justify-center self-center gap-x-2"
    >
      {cloneElement(icon, {
        className: "w-10 h-10",
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, {
        className: "h-10",
      })}
    </div>
  );
};

export default Placeholder;
