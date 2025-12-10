import Placeholder from "@/src/components/placeholder";
import { Button } from "@/src/components/ui/button";
import { ticketsPath } from "@/src/paths";
import Link from "next/link";

const NotFound = () => {
  return (
    <Placeholder
      label="Ticket not found"
      button={
        <Button asChild variant="outline">
          <Link href={ticketsPath()}>Go to tickets</Link>
        </Button>
      }
    />
  );
};

export default NotFound;
