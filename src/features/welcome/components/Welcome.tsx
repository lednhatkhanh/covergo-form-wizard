import Head from "next/head";
import * as React from "react";
import { Button, Text } from "src/components";

const Welcome = () => {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>

      <main>
        <div className="bg-gray-100 p-12 flex flex-col gap-y-6 items-center mx-auto mt-32 w-[fit-content]">
          <Text variant="title">Hello There!</Text>
          <Text component="p">
            Let&apos;s buy some insurance. It is going to take only a few steps
          </Text>

          <Button size="large">Start</Button>
        </div>
      </main>
    </>
  );
};

export { Welcome };
