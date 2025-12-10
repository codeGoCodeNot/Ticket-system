export type TicketStatus = "DONE" | "OPEN" | "IN_PROGRESS";

export type Ticket = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string;
  status: TicketStatus;
};
