import Placeholder from "@/src/components/placeholder";
import { Button } from "@/src/components/ui/button";
import { getTicket } from "@/src/features/queries/get-ticket";
import TicketItem from "@/src/features/ticket/components/ticket-item";
import { ticketsPath } from "@/src/paths";
import Link from "next/link";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

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
      <div className="flex justify-center animate-fade-from-top">
        <TicketItem ticket={ticket} isDetail />
      </div>
    </>
  );
};

export default TicketPage;
