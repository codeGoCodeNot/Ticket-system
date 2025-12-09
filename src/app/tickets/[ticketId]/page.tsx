import Placeholder from "@/src/components/placeholder";
import { Button } from "@/src/components/ui/button";
import { initialTickets } from "@/src/data";
import { ticketsPath } from "@/src/paths";
import Link from "next/link";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket)
    return (
      <>
        <Placeholder
          label="Ticket not found"
          button={
            <Button asChild variant="outline">
              <Link href={ticketsPath()}>Go to tickets</Link>
            </Button>
          }
        />
      </>
    );

  return (
    <>
      <h2 className="text-lg">{ticket.title}</h2>
      <p className="text-sm">{ticket.content}</p>
    </>
  );
};

export default TicketPage;
