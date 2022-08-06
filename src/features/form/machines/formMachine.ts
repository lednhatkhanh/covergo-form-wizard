import {
  Currencies,
  CurrenciesType,
  MAXIMUM_AGE,
  Packages,
  PackageType,
} from "src/models/formModel";
import { assign, createMachine } from "xstate";

type Context = {
  name: string;
  age: number;
  currency: CurrenciesType;
  package: PackageType;
};

const formMachine = createMachine(
  {
    id: "form",
    schema: {
      context: {} as Context,
      events: {} as
        | { type: "SUBMIT" }
        | { type: "UPDATE_CURRENCY"; value: CurrenciesType }
        | { type: "UPDATE_NAME"; value: string }
        | { type: "UPDATE_AGE"; value: number }
        | { type: "UPDATE_PACKAGE"; value: PackageType },
    },
    tsTypes: {} as import("./formMachine.typegen").Typegen0,
    initial: "inputting",
    context: {
      name: "",
      age: 0,
      currency: Currencies.HKD,
      package: Packages.standard,
    },
    states: {
      inputting: {
        on: {
          SUBMIT: [
            { target: "ageError", cond: "ageError" },
            { target: "finished" },
          ],
          UPDATE_CURRENCY: {
            actions: "updateCurrency",
          },
          UPDATE_NAME: {
            actions: "updateName",
          },
          UPDATE_AGE: {
            actions: "updateAge",
          },
          UPDATE_PACKAGE: {
            actions: "updatePackage",
          },
        },
      },
      ageError: {
        type: "final",
      },
      finished: {
        type: "final",
      },
    },
  },
  {
    guards: {
      ageError(ctx) {
        return ctx.age > MAXIMUM_AGE;
      },
    },
    actions: {
      updateCurrency: assign({
        currency: (_, event) => event.value,
      }),
      updateName: assign({
        name: (_, event) => event.value,
      }),
      updateAge: assign({
        age: (_, event) => event.value,
      }),
      updatePackage: assign({
        package: (_, event) => event.value,
      }),
    },
  },
);

export type FormMachine = typeof formMachine;

export { formMachine };
