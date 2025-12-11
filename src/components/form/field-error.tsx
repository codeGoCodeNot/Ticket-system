import { ActionState } from "./utils/to-action-state";

type FieldErrorProps = {
  actionState: ActionState;
  name: string;
};

const FieldErrors = ({ actionState, name }: FieldErrorProps) => {
  const message = actionState.fieldErrors?.[name];

  if (!message || message.length === 0) return null;

  return <span className="text-xs text-red-500">{message}</span>;
};

export default FieldErrors;
