import styled from "styled-components";
import logo from "../assets/images/logo.png";

const TopHeader = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

const Logo = styled.img`
  height: auto;
  width: 20rem;

  @media (max-width: 500px) {
    height: auto;
    width: 10rem;
  }
`;

const NavigationBar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: var(--blue);
  padding: 1rem;
  align-items: center;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const NavItem = styled.li`
  list-style: none;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-weight: bolder;
  color: #ffffff;
  margin: 1rem;
  padding: 1rem;

  &:hover {
    color: #f66732;
  }
`;

const ContactSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  color: var(--blue);
`;

const ContactLink = styled.a`
  display: grid;
  grid-template-columns: auto auto;
  text-decoration: none;
  color: var(--blue);
  font-size: 1.3rem;
  place-items: center;
  text-align: center;

  &:hover {
    color: var(--orange);
  }
`;

const ContactIcon = styled.i`
  font-size: 2rem;
  margin-right: 1rem;
`;

const HamburgerIcon = styled.i`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const Header = () => {
  const links = [
    { link: "Home", href: "#" },
    { link: "About Us", href: "/" },
    { link: "Services", href: "#services" },
    { link: "some link3", href: "/" },
    { link: "some link4", href: "/" },
  ];

  const navLink = (link, href) => (
    <NavItem key={link}>
      <NavLink className="link" href={href}>
        {link}
      </NavLink>
    </NavItem>
  );

  return (
    <header>
      <TopHeader>
        <Logo src={logo} alt="Super Delta Heating & Cooling" />
        <ContactSection>
          <ContactLink href="tel:5555555555">
            <ContactIcon className="fas fa-phone-alt" />
            <div>
              <div>Call Us Now</div>
              <div>(555) 555-5555</div>
            </div>
          </ContactLink>
          <ContactLink href="emailto:test@email.com">
            <ContactIcon className="fas fa-at" />
            <div>
              <div>Email Us</div>
              <div>test@test.com</div>
            </div>
          </ContactLink>
        </ContactSection>
        {/* <HamburgerIcon className="fas fa-bars"></HamburgerIcon> */}
      </TopHeader>

      <NavigationBar>
        {links.map(link => navLink(link.link, link.href))}
      </NavigationBar>
    </header>
  );
};

export default Header;
