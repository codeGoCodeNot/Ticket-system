import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/src/components/ui/card";
import { ticketPath } from "@/src/paths";

import Link from "next/link";
import { Ticket } from "../../type";
import { TICKET_ICONS } from "../../constants";
import { SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import clsx from "clsx";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link href={ticketPath(ticket.id)} className="text-sm underline">
        <SquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  return (
    <>
      <div
        className={clsx("w-full flex gap-x-1", {
          "max-w-[580px]": isDetail,
          "max-w-[420px]": !isDetail,
        })}
      >
        <Card className="w-full" key={ticket.id}>
          <CardHeader>
            <CardTitle className="flex gap-x-2 items-center">
              <span>{TICKET_ICONS[ticket.status]}</span>
              <span className="truncate">{ticket.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <span
              className={clsx("whitespace-break-spaces", {
                "line-clamp-3": !isDetail,
              })}
            >
              {ticket.content}
            </span>
          </CardContent>
        </Card>

        {!isDetail && (
          <div className="flex flex-col gap-y-1">{detailButton}</div>
        )}
      </div>
    </>
  );
};

export default TicketItem;
