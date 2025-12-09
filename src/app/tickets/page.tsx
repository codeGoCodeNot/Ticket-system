import { initialTickets } from "@/src/data";
import { ticketPath } from "@/src/paths";
import clsx from "clsx";
import Link from "next/link";
import { Check, FileText, Pencil } from "lucide-react";

const TICKET_ICONS = {
  DONE: <Check />,
  OPEN: <FileText />,
  IN_PROGRESS: <Pencil />,
};

const TicketsPage = () => {
  return (
    <>
      <div className="flex flex-1 flex-col gap-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">TicketsPage</h2>
          <p className="text-sm text-muted-foreground">
            All your tickets at one place
          </p>
        </div>
        <div
          className="
        flex-1 flex flex-col items-center gap-y-4 
        animate-fade-from-top
        "
        >
          {initialTickets.map((ticket) => (
            <div
              className="w-full max-w-[420px] p-4 border border-slate-100 rounded"
              key={ticket.id}
            >
              <div>{TICKET_ICONS[ticket.status]}</div>
              <h2 className="text-lg font-semibold truncate">{ticket.title}</h2>
              <p
                className={clsx("text-sm truncate text-slate-500", {
                  "line-through": ticket.status === "DONE",
                })}
              >
                {ticket.content}
              </p>
              <Link href={ticketPath(ticket.id)} className="text-sm underline">
                View
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TicketsPage;
