import { initialTickets } from "@/src/data";

import { Separator } from "@/src/components/ui/separator";
import Heading from "@/src/components/heading";
import TicketItem from "@/src/features/ticket/components/ticket-item";

const TicketsPage = () => {
  return (
    <>
      <div className="flex flex-1 flex-col gap-y-8">
        <Heading title="Tickets" desc="All your tickets at one place" />
        <Separator />

        <div
          className="
        flex-1 flex flex-col items-center gap-y-4 
        animate-fade-from-top
        "
        >
          {initialTickets.map((ticket) => (
            <TicketItem key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TicketsPage;
