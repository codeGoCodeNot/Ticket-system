"use client";

import SubmitButton from "@/src/components/form/submit-button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Ticket } from "@/src/generated/prisma/client";
import { Label } from "@radix-ui/react-label";
import { upsertTicket } from "../actions/upsert-ticket";
import { useActionState } from "react";

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    {
      message: "",
    }
  );

  return (
    <form action={action} className="flex flex-col gap-y-2">
      <Label htmlFor="title">Title</Label>
      <Input type="text" id="title" name="title" defaultValue={ticket?.title} />

      <Label htmlFor="content">Content</Label>
      <Textarea id="content" name="content" defaultValue={ticket?.content} />
      <SubmitButton label={ticket ? "Edit" : "Create"} />
      {actionState.message}
    </form>
  );
};

export default TicketUpsertForm;
