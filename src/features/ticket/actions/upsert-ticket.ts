"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ticketsPath, ticketPath } from "@/src/paths";
import prisma from "@/src/lib/prisma";
import { z } from "zod";
import fromErrorToActionState, {
  toActionState,
  type ActionState,
} from "@/src/components/form/utils/to-action-state";
import { setCookieByKey } from "@/src/actions/cookies";

const upsertTicketSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, { message: "Title must have at least 1 character" })
    .max(191, { message: "Title can be at most 191 characters" }),
  content: z
    .string()
    .trim()
    .min(1, {
      message: "Content must have at least 1 character",
    })
    .max(1024, { message: "Content can be at most 1024 characters" }),
});

export const upsertTicket = async (
  id: string | undefined,
  _actionState: ActionState,
  formData: FormData
) => {
  try {
    const data = upsertTicketSchema.parse({
      title: formData.get("title"),
      content: formData.get("content"),
    });

    await prisma.ticket.upsert({
      where: { id: id || "" },
      update: data,
      create: data,
    });
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  revalidatePath(ticketsPath());

  if (id) {
    setCookieByKey("toast", "Ticket updated");
    redirect(ticketPath(id));
  }

  return toActionState("SUCCESS", "Ticket created");
};
