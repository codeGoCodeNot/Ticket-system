"use client";

import FieldErrors from "@/src/components/form/field-error";
import useActionFeedback from "@/src/components/form/hooks/use-action-feedback";
import SubmitButton from "@/src/components/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/src/components/form/utils/to-action-state";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Ticket } from "@/src/generated/prisma/client";
import { Label } from "@radix-ui/react-label";
import { useActionState } from "react";
import { upsertTicket } from "../actions/upsert-ticket";
import { toast } from "sonner";

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    EMPTY_ACTION_STATE
  );

  useActionFeedback(actionState, {
    onSuccess: ({ actionState }) => {
      if (actionState.message) {
        toast.success(actionState.message);
      }
    },
    onError: ({ actionState }) => {
      if (actionState.message) {
        toast.error(actionState.message);
      }
    },
  });

  return (
    <form action={action} className="flex flex-col gap-y-2">
      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        id="title"
        name="title"
        defaultValue={
          (actionState.payload?.get("title") as string) ?? ticket?.title
        }
      />
      <FieldErrors actionState={actionState} name="title" />

      <Label htmlFor="content">Content</Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={
          (actionState.payload?.get("content") as string) ?? ticket?.content
        }
      />
      <FieldErrors actionState={actionState} name="content" />
      <SubmitButton label={ticket ? "Edit" : "Create"} />
    </form>
  );
};

export default TicketUpsertForm;
