import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Ticket, TicketStatus } from "@/src/generated/prisma/client";
import React from "react";
import { TICKET_STATUS_LABELS } from "../../constants";

type TicketMoreMenuProps = {
  ticket: Ticket;
  trigger: React.ReactNode;
  deleteButton: React.ReactNode;
};

const TicketMoreMenu = ({
  ticket,
  trigger,
  deleteButton,
}: TicketMoreMenuProps) => {
  const ticketStatusRadioGroupItems = (
    <DropdownMenuRadioGroup value={ticket.status}>
      {(Object.keys(TICKET_STATUS_LABELS) as TicketStatus[]).map((key) => (
        <DropdownMenuRadioItem key={key} value={key}>
          {TICKET_STATUS_LABELS[key]}
        </DropdownMenuRadioItem>
      ))}
    </DropdownMenuRadioGroup>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" side="right">
        {ticketStatusRadioGroupItems}
        <DropdownMenuSeparator />
        <DropdownMenuItem>{deleteButton}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TicketMoreMenu;
