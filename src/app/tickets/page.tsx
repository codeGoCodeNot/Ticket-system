import { initialTickets } from "@/src/data";
import { ticketPath } from "@/src/paths";
import Link from "next/link";

const TicketsPage = () => {
  return (
    <div>
      {initialTickets.map((ticket) => (
        <div className="text-lg" key={ticket.id}>
          <h2 className="text-lg">{ticket.title}</h2>
          <Link href={ticketPath(ticket.id)} className="text-sm underline">
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TicketsPage;
