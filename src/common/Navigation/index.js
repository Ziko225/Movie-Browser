import SearchBar from "./SearchBar";
import {
  Header,
  Wrapper,
  StyledLogo,
  Nav,
  StyledIcon,
  Title,
  StyledLink,
  NavList,
  NavListItem,
  StyledNavLink,
} from "./styled";

const Navigation = () => {
  return (
   <>
    <Header>
      <Wrapper>
        <Nav>
          <StyledLogo>
            <StyledIcon />
            <Title>
              <StyledLink>
                movies browser
              </StyledLink>
            </Title>
          </StyledLogo>
          <NavList>
            <NavListItem>
              <StyledNavLink to="/movies">
                movies
              </StyledNavLink>
            </NavListItem>
            <NavListItem>
              <StyledNavLink to="/persons">
                people
              </StyledNavLink>
            </NavListItem>
          </NavList>
        </Nav>
        <SearchBar />
      </Wrapper>
    </Header>
   </>
  )
};

export default Navigation;