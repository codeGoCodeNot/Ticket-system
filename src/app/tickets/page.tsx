import Heading from "@/src/components/heading";
import Spinner from "@/src/components/spinner";
import { Separator } from "@/src/components/ui/separator";
import TicketList from "@/src/features/ticket/components/ticket-list";
import { Suspense } from "react";

const TicketsPage = async () => {
  return (
    <>
      <div className="flex flex-1 flex-col gap-y-8">
        <Heading title="Tickets" desc="All your tickets at one place" />
        <Separator />
        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
      </div>
    </>
  );
};

export default TicketsPage;
