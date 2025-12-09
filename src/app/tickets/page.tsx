import { initialTickets } from "@/src/data";
import { ticketPath } from "@/src/paths";
import Link from "next/link";
import { Check, FileText, Pencil } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Separator } from "@/src/components/ui/separator";
import Heading from "@/src/components/heading";

const TICKET_ICONS = {
  DONE: <Check />,
  OPEN: <FileText />,
  IN_PROGRESS: <Pencil />,
};

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
            <Card className="w-full max-w-[420px]" key={ticket.id}>
              <CardHeader>
                <CardTitle className="flex gap-x-2 items-center">
                  <span>{TICKET_ICONS[ticket.status]}</span>
                  <span className="truncate">{ticket.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <span className="line-clamp-3 whitespace-break-spaces">
                  {ticket.content}
                </span>
              </CardContent>
              <CardFooter>
                <Link
                  href={ticketPath(ticket.id)}
                  className="text-sm underline"
                >
                  View
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default TicketsPage;
