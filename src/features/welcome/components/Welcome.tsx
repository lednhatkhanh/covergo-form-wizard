import Link from "next/link";
import * as React from "react";
import { Button, Container, Text } from "src/components";

const Welcome: React.FC = () => {
  return (
    <Container>
      <Text variant="title">Hello There!</Text>
      <Text component="p">
        Let&apos;s buy some insurance. It is going to take only a few steps
      </Text>

      <Button size="large" component={Link} href="/form">
        Start
      </Button>
    </Container>
  );
};

export { Welcome };
