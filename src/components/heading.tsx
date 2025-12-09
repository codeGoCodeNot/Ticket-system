import { Separator } from "@radix-ui/react-separator";

type HeadingProps = {
  title: string;
  desc?: string;
};

const Heading = ({ title, desc }: HeadingProps) => {
  return (
    <>
      <div className="px-8">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        {desc && <p className="text-sm text-muted-foreground">{desc}</p>}
      </div>

      <Separator />
    </>
  );
};

export default Heading;
