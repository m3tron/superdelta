import styled from "styled-components";
import logo from "../assets/images/logo.png";

const TopHeader = styled.div`
  display: flex;
  margin: 1rem;
`;

const Logo = styled.img`
  height: auto;
  width: 20rem;

  @media (max-width: 500px) {
    width: 10rem;
  }
`;

const NavigationBar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: var(--blue);
  padding: 1rem;
  align-items: center;
`;

const NavLink = styled.a`
  text-decoration: none;
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
  width: 100%;
  color: var(--blue);
`;

const ContactLink = styled.a`
  display: grid;
  grid-template-columns: auto auto;
  text-decoration: none;
  color: var(--blue);
  font-size: 1rem;
  text-align: center;

  &:hover {
    color: var(--orange);
  }
`;

const ContactIcon = styled.i`
  font-size: 2rem;
  margin-right: 1rem;
`;

const Header = () => {
  const links = [
    { link: "Home", href: "/" },
    { link: "About Us", href: "/" },
    { link: "Services", href: "/" },
    { link: "some link3", href: "/" },
    { link: "some link4", href: "/" },
  ];

  const navLink = (link, href) => (
    <li key={link}>
      <NavLink className="link" href={href}>
        {link}
      </NavLink>
    </li>
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
              <div>test@email.com</div>
            </div>
          </ContactLink>
        </ContactSection>
      </TopHeader>
      <NavigationBar>
        {links.map(link => navLink(link.link, link.href))}
      </NavigationBar>
    </header>
  );
};

export default Header;
