"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ticketsPath, ticketPath } from "@/src/paths";
import prisma from "@/src/lib/prisma";
import { z } from "zod";
import fromErrorToActionState, {
  type ActionState,
} from "@/src/components/form/utils/to-action-state";

const upsertTicketSchema = z.object({
  title: z.string().trim().min(1).max(191),
  content: z.string().trim().min(1).max(1024),
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
    redirect(ticketPath(id));
  }

  return { message: "Ticket created" };
};
