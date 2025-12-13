"use client";

import FieldErrors from "@/src/components/form/field-error";
import Form from "@/src/components/form/form";
import SubmitButton from "@/src/components/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/src/components/form/utils/to-action-state";
import DatePicker from "@/src/components/ui/date-picker";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Ticket } from "@/src/generated/prisma/client";
import { fromCent } from "@/src/utils/currency";
import { Label } from "@radix-ui/react-label";
import { useActionState, useRef } from "react";
import { upsertTicket } from "../actions/upsert-ticket";

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    EMPTY_ACTION_STATE
  );

  const dataPickerImperativeHandleRef = useRef<{ reset: () => void }>(null);

  const handleSuccess = () => {
    dataPickerImperativeHandleRef.current?.reset();
  };

  return (
    <Form action={action} actionState={actionState} onSuccess={handleSuccess}>
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
      <div className="flex gap-x-2 mb-1">
        <div className="w-1/2">
          <Label htmlFor="deadline">Deadline</Label>
          <DatePicker
            id="deadline"
            name="deadline"
            defaultValue={
              (actionState.payload?.get("deadline") as string) ??
              ticket?.deadline
            }
            imperativeHandleRef={dataPickerImperativeHandleRef}
          />
          <FieldErrors actionState={actionState} name="deadline" />
        </div>

        <div className="w-1/2">
          <Label htmlFor="bounty">Bounty (₱)</Label>
          <Input
            type="number"
            id="bounty"
            name="bounty"
            step=".01"
            defaultValue={
              (actionState.payload?.get("bounty") as string) ??
              (ticket?.bounty ? fromCent(ticket?.bounty) : "")
            }
          />
          <FieldErrors actionState={actionState} name="bounty" />
        </div>
      </div>
      <SubmitButton label={ticket ? "Edit" : "Create"} />
    </Form>
  );
};

export default TicketUpsertForm;
