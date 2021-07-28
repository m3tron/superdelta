import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  background: var(--blue);
  color: #ffffff;
  padding: 1rem;
`;

const Footer = () => {
  const date = new Date();

  return (
    <FooterContainer>
      &copy; {date.getFullYear()} Super Delta Heating & Cooling Inc.
    </FooterContainer>
  );
};

export default Footer;
