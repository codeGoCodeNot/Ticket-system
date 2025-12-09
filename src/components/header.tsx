import { Kanban } from "lucide-react";
import { homePath, ticketsPath } from "../paths";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <nav
      className="
            supports-backdrop-blur:bg-background/60
            fixed left-0 right-0 top-0 z-20
            border-b backdrop-blur
            w-full flex py-2.5 px-5 justify-between
          "
    >
      <Button asChild variant="ghost">
        <Link href={homePath()}>
          <Kanban />
          <h1 className="text-lg font-semibold ml-2">TicketBounty</h1>
        </Link>
      </Button>

      <Button asChild variant="default">
        <Link href={ticketsPath()}>Tickets</Link>
      </Button>
    </nav>
  );
};

export default Header;
