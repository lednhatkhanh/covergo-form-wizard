import Link from "next/link";
import * as React from "react";
import { Button, Container, Text } from "src/components";

const AgeError: React.FC = () => {
  return (
    <Container>
      <Text variant="title">Ooops</Text>

      <div className="flex flex-col gap-y-2 items-center">
        <Text>Your age is over our accepted limit.</Text>
        <Text>We are sorry but we cannot insure you now</Text>
      </div>

      <Button size="large" component={Link} href="/">
        Ok :(
      </Button>
    </Container>
  );
};

export { AgeError };
