import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  viewIcon: boolean,
  title: string,
}

export function Button({ viewIcon, title,...rest}: Props){
  return(
    <Container {...rest}>
      {viewIcon && <Icon />}
      <Title>{title}</Title>
    </Container>
  )
}