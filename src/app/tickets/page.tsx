import CardCompact from "@/src/components/card-compact";
import Heading from "@/src/components/heading";
import RedirectToast from "@/src/components/redirect-toast";
import Spinner from "@/src/components/spinner";
import { Separator } from "@/src/components/ui/separator";
import TicketList from "@/src/features/ticket/components/ticket-list";
import TicketUpsertForm from "@/src/features/ticket/components/ticket-upsert-form";
import { Suspense } from "react";

const TicketsPage = async () => {
  return (
    <>
      <div className="flex flex-1 flex-col gap-y-8">
        <Heading title="Tickets" desc="All your tickets at one place" />
        <Separator />

        <CardCompact
          title="Create Ticket"
          description="A new ticket will be created"
          className="w-full max-w-[420px] self-center"
          content={<TicketUpsertForm />}
        />

        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
      </div>

      <RedirectToast />
    </>
  );
};

export default TicketsPage;
