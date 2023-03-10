import { Container, Logo, User } from "./styles";
import logo from '@assets/logo.png';
import user from  '@assets/user.png';

export function Header(){
  return(
    <Container>
      <Logo source={logo} />
      <User source={user} />
    </Container>
  )
}