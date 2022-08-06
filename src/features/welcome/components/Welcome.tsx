import * as React from "react";
import { Button } from "src/components/Button";

const Welcome = () => {
  return (
    <main>
      <div className="bg-gray-100 p-12 flex flex-col gap-y-6 items-center mx-auto mt-32 w-[fit-content]">
        <h1 className="text-4xl font-semibold">Hello There!</h1>
        <div className="text-md">
          Let&apos;s buy some insurance. It is going to take only a few steps
        </div>

        <Button size="large">Start</Button>
      </div>
    </main>
  );
};

export { Welcome };
