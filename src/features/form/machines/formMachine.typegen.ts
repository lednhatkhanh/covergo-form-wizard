// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingActions: {
    updateAge: "UPDATE_AGE";
    updateCurrency: "UPDATE_CURRENCY";
    updateName: "UPDATE_NAME";
    updatePackage: "UPDATE_PACKAGE";
  };
  eventsCausingServices: {};
  eventsCausingGuards: {
    ageError: "SUBMIT";
  };
  eventsCausingDelays: {};
  matchesStates: "ageError" | "finished" | "inputting";
  tags: never;
}
