import { initialTickets } from "@/src/data";
import { Ticket } from "../type";

export const getTicket = async (ticketId: string): Promise<Ticket | null> => {
  const maybeTicket = initialTickets.find((ticket) => ticket.id === ticketId);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => resolve(maybeTicket || null));
};
