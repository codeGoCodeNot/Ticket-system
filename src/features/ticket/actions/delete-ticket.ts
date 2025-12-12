"use server";

import { setCookieByKey } from "@/src/actions/cookies";
import prisma from "@/src/lib/prisma";
import { ticketsPath } from "@/src/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const deleteTicket = async (id: string) => {
  await prisma.ticket.delete({
    where: {
      id,
    },
  });

  revalidatePath(ticketsPath());
  await setCookieByKey("toast", "Ticket deleted");
  redirect(ticketsPath());
};

export default deleteTicket;
