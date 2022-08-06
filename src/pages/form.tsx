import { useActor, useInterpret } from "@xstate/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";
import { Form, formMachine } from "src/features/form";

const FormPage = () => {
  const formService = useInterpret(formMachine);
  const [current] = useActor(formService);
  const isInputtingStep = current.matches("inputting");
  const isAgeErrorStep = current.matches("ageError");
  const isFinished = current.matches("finished");
  const router = useRouter();

  React.useEffect(() => {
    if (isFinished) {
      const params = new URLSearchParams();
      params.append("name", current.context.name);
      params.append("age", `${current.context.age}`);
      params.append("currency", current.context.currency);
      params.append("package", current.context.package);

      router.push(`/summary?${params.toString()}`);
    }
  }, [
    router,
    isFinished,
    current.context.name,
    current.context.age,
    current.context.currency,
    current.context.package,
  ]);

  return (
    <>
      <Head>
        <title>Buy Insurance</title>
      </Head>

      <main>
        {isInputtingStep ? <Form formService={formService} /> : null}
        {isAgeErrorStep ? <DynamicAgeError /> : null}
      </main>
    </>
  );
};

const DynamicAgeError = dynamic<{}>(() =>
  import("src/features/age-error/components/AgeError").then(
    (mod) => mod.AgeError,
  ),
);

export default FormPage;
