import { useActor } from "@xstate/react";
import Link from "next/link";
import * as React from "react";
import {
  Button,
  Container,
  FormControl,
  Input,
  Label,
  RadioButton,
  Select,
  Text,
} from "src/components";
import {
  Countries,
  Currencies,
  CurrenciesType,
  ExtraFeeRate,
  Packages,
  PackageType,
} from "src/models/formModel";
import { calculatePackageExtraFee, calculateTotalFee } from "src/services/fee";
import { InterpreterFrom } from "xstate";
import { FormMachine } from "../machines";

type Props = {
  formService: InterpreterFrom<FormMachine>;
};

const Form: React.FC<Props> = ({ formService }: Props) => {
  const [state, send] = useActor(formService);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    send({ type: "SUBMIT" });
  }

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    send({ type: "UPDATE_NAME", value: event.target.value });
  }

  function handleChangeAge(event: React.ChangeEvent<HTMLInputElement>) {
    send({ type: "UPDATE_AGE", value: event.target.valueAsNumber || 0 });
  }

  function handleChangeCurrency(event: React.ChangeEvent<HTMLSelectElement>) {
    send({
      type: "UPDATE_CURRENCY",
      value: event.target.value as CurrenciesType,
    });
  }

  function handleChangePackage(event: React.ChangeEvent<HTMLInputElement>) {
    send({ type: "UPDATE_PACKAGE", value: event.target.value as PackageType });
  }

  return (
    <Container>
      <Text variant="title">Tell us about yourself</Text>

      <form
        action="POST"
        className="flex flex-col items-center gap-y-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-y-4">
          <FormControl id="name" name="name">
            <Label>Name</Label>
            <Input
              placeholder="Add text"
              required
              value={state.context.name}
              onChange={handleChangeName}
            />
          </FormControl>

          <FormControl id="age" name="age">
            <Label>Age</Label>
            <Input
              placeholder="Add age"
              type="number"
              required
              value={state.context.age}
              onChange={handleChangeAge}
            />
          </FormControl>

          <FormControl id="country" name="country">
            <Label>Where do you live</Label>
            <Select
              placeholder="Add text"
              value={state.context.currency}
              onChange={handleChangeCurrency}
            >
              <option value={Currencies.HKD}>{Countries["HKD"]}</option>
              <option value={Currencies.USD}>{Countries["USD"]}</option>
              <option value={Currencies.AUD}>{Countries["AUD"]}</option>
            </Select>
          </FormControl>

          <RadioButton
            id={Packages.standard}
            name="package"
            value={Packages.standard}
            checked={state.context.package === Packages.standard}
            onChange={handleChangePackage}
          >
            Standard
          </RadioButton>

          <RadioButton
            id={Packages.safe}
            name="package"
            value={Packages.safe}
            checked={state.context.package === Packages.safe}
            onChange={handleChangePackage}
          >
            Safe
            {buildPackageText(
              "safe",
              state.context.currency,
              state.context.age,
            )}
          </RadioButton>

          <RadioButton
            id={Packages["super-safe"]}
            name="package"
            value={Packages["super-safe"]}
            checked={state.context.package === Packages["super-safe"]}
            onChange={handleChangePackage}
          >
            Super Safe
            {buildPackageText(
              "super-safe",
              state.context.currency,
              state.context.age,
            )}
          </RadioButton>
        </div>

        {state.context.age ? (
          <Text variant="title">
            {buildTotalFeeText(
              state.context.package,
              state.context.currency,
              state.context.age,
            )}
          </Text>
        ) : null}

        <div className="flex gap-x-6">
          <Button variant="secondary" component={Link} href="/">
            Back
          </Button>

          <Button type="submit">Next</Button>
        </div>
      </form>
    </Container>
  );
};

function buildTotalFeeText(
  p: PackageType,
  currency: CurrenciesType,
  age: number,
) {
  return `Your premium is: ${calculateTotalFee(p, currency, age)}${currency}`;
}

function buildPackageText(
  p: PackageType,
  currency: CurrenciesType,
  age?: number,
) {
  if (!age) {
    return "";
  }

  switch (p) {
    case "standard": {
      return "";
    }
    case "safe":
    case "super-safe": {
      const extraFee = calculatePackageExtraFee(p, currency, age);
      return ` (+${extraFee}${currency}, ${ExtraFeeRate[p] * 100}%)`;
    }
  }
}

export { Form };
