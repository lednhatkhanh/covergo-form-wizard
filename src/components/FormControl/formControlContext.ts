import { createStateContext } from "react-use";

type State = {
  id: string | undefined;
  name: string | undefined;
};

const initialState: State = {
  id: undefined,
  name: undefined,
};

const [useFormControlId, FormControlIdProvider] =
  createStateContext<State>(initialState);

export { useFormControlId, FormControlIdProvider };
