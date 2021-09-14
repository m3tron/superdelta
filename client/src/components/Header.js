import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;

  @media only screen and (min-width: 768px) {
    justify-content: center;
    margin: 1rem;
  }
`;

const Logo = styled.img`
  height: auto;
  width: 10rem;

  @media (min-width: 768px) {
    width: 20rem;
  }
`;

const ContactSection = styled.div`
  display: grid;
  width: auto;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    color: var(--blue);
  }
`;

const ContactLink = styled.a`
  display: grid;
  grid-template-columns: auto auto;
  text-decoration: none;
  color: var(--blue);
  font-size: 0.75rem;
  place-items: center;
  text-align: center;
  margin-top: 10px;

  &:hover {
    color: var(--orange);
  }

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;

const ContactIcon = styled.i`
  font-size: 0.75rem;
  margin-right: 1rem;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

const HamburgerIcon = styled.i`
  display: inline;
  margin-right: 1rem;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const NavigationBar = styled.nav`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    background-color: var(--blue);
    padding: 1rem;
    align-items: center;
  }
`;

const NavItem = styled.li`
  list-style: none;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-weight: bolder;
  font-size: 2rem;
  color: #ffffff;
  margin: 1rem;
  padding: 1rem;
  display: block;

  &:hover {
    color: #f66732;
  }

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
    display: inline;
  }
`;

const MobileMenu = styled.div`
  display: ${props => (props.open ? "block" : "none")};
  height: ${props => (props.open ? "100%" : 0)};

  background-color: rgba(32, 20, 95, 0.9);
  width: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  overflow-x: hidden;
  transition: 0.5s;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuContent = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin-top: 25%;
`;

const MenuIcon = styled.i`
  position: absolute;
  top: 20px;
  right: 1rem;
  color: #ffffff;
`;

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    { link: "Home", href: "#home" },
    { link: "About Us", href: "#about-us" },
    { link: "Services", href: "#services" },
    { link: "Testimonials", href: "#testimonials" },
    { link: "some link4", href: "!#" },
  ];

  const navLink = (link, href) => (
    <NavItem key={link}>
      <NavLink className="link" href={href} onClick={() => setOpenMenu(false)}>
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
            <div>(555) 555-5555</div>
          </ContactLink>
          <ContactLink href="emailto:test@email.com">
            <ContactIcon className="fas fa-at" />
            <div>test@test.com</div>
          </ContactLink>
        </ContactSection>

        <HamburgerIcon
          className="fas fa-bars"
          onClick={() => setOpenMenu(!openMenu)}
        />

        <MobileMenu open={openMenu}>
          <MenuIcon
            className="fas fa-times"
            onClick={() => setOpenMenu(false)}
          />
          <MobileMenuContent>
            {links.map(link => navLink(link.link, link.href))}
          </MobileMenuContent>
        </MobileMenu>
      </TopHeader>

      <NavigationBar>
        {links.map(link => navLink(link.link, link.href))}
      </NavigationBar>
    </header>
  );
};

export default Header;
