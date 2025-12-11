"use server";

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
  redirect(ticketsPath());
};

export default deleteTicket;
