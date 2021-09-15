import styled from "styled-components";

const Container = styled.div`
  background-color: #ffffff;
  color: var(--blue);
  padding: 1rem;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media only screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

const Contact = () => {
  return (
    <Container id="contact">
      <Title>Contact us</Title>
      <ContactContainer>
        <div>
          <div>(555) 555-5555</div>
          <div>email@test.com</div>
          <div>
            <div>Operating in the Greater Toronto Area</div>
          </div>
        </div>
        <div>Map</div>
      </ContactContainer>
    </Container>
  );
};

export default Contact;
