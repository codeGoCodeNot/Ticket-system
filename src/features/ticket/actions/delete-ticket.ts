"use server";

import prisma from "@/src/lib/prisma";
import { ticketsPath } from "@/src/paths";
import { redirect } from "next/navigation";

const deleteTicket = async (id: string) => {
  await prisma.ticket.delete({
    where: {
      id,
    },
  });

  redirect(ticketsPath());
};

export default deleteTicket;
