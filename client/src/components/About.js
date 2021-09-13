import styled from "styled-components";

const Container = styled.div`
  /* height: 600px; */
  background: var(--blue);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  color: white;
  text-align: center;
  margin: 0 1rem 0 1rem;
  padding: 1rem 0 1rem 0;
`;

const About = () => {
  return (
    <Container id="about-us">
      <Text>
        <p>
          Operating since 2013, our team of experienced and Qualified TSSA
          Approved Technicians, specialize in all types of industrial and
          commercial Heating & Refrigeration equipment.
        </p>
      </Text>
    </Container>
  );
};

export default About;
