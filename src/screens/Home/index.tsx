import { Header } from "@components/Header";
import { useState } from "react";
import { Statistics } from "./components/Statistics";
import { Container } from "./styles";

export function Home(){
  const [inDiet, setInDiet] = useState<boolean>(true);

  return (
    <Container>
      <Header />
      <Statistics inDiet={inDiet} type="primary" />
    </Container>
  )
}