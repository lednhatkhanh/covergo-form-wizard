import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { Button, Container, Text } from "src/components";
import {
  Countries,
  CurrenciesType,
  PackageName,
  PackageType,
} from "src/models/formModel";
import { calculateTotalFee } from "src/services/fee";

type Data = {
  name: string;
  age: number;
  currency: CurrenciesType;
  package: PackageType;
};

const Summary = () => {
  const router = useRouter();
  const query = router.query;
  const [data, setData] = React.useState<Data | null>(null);

  React.useEffect(() => {
    const name = query.name;
    const age = typeof query.age === "string" ? parseInt(query.age) : NaN;
    const currency = query.currency as CurrenciesType | null;
    const pk = query.package as PackageType | null;

    if (
      typeof name === "string" &&
      name &&
      !!age &&
      currency &&
      pk &&
      Countries[currency as CurrenciesType] &&
      PackageName[pk as PackageType]
    ) {
      setData({
        name,
        age,
        currency,
        package: pk,
      });
    } else {
      router.replace("/");
    }
  }, [query.age, query.currency, query.name, query.package, router]);

  if (!data) {
    return null;
  }

  return (
    <Container>
      <Text variant="title">Summary {data.name},</Text>
      <Text>Name: {data.name}</Text>
      <Text>Age: {data.age}</Text>
      <Text>
        Where do you live: {Countries[data.currency as CurrenciesType]}
      </Text>
      <Text>Package: {PackageName[data.package as PackageType]}</Text>
      <Text>
        Premium:{" "}
        {calculateTotalFee(
          data.package as PackageType,
          data.currency,
          data.age,
        )}
        {data.currency}
      </Text>

      <div className="flex gap-x-6">
        <Button variant="secondary" component={Link} href="/form">
          Back
        </Button>

        <Button component={Link} href="/">
          Buy
        </Button>
      </div>
    </Container>
  );
};

export { Summary };
