import Link from "next/link";
import { ticketsPath } from "../paths";
import Heading from "../components/heading";
import { Separator } from "../components/ui/separator";

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Home" desc="Your home place to start" />

      <div>
        <Separator />
      </div>

      <div className="flex flex-1 flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          Go to tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
