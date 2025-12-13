import { Check, FileText, Pencil } from "lucide-react";

export const TICKET_ICONS = {
  DONE: <Check />,
  OPEN: <FileText />,
  IN_PROGRESS: <Pencil />,
};

export const TICKET_STATUS_LABELS = {
  OPEN: "Open",
  DONE: "Done",
  IN_PROGRESS: "In Progress",
};
