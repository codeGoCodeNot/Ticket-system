"use client";

import Placeholder from "@/src/components/placeholder";

const Error = ({ error }: { error: Error }) => {
  return (
    <div>
      {<Placeholder label={error.message || "Something went wrong!"} />}
    </div>
  );
};

export default Error;
