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

  p {
    max-width: 1200px;
  }

  @media only screen and (min-width: 768px) {
    font-size: larger;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const About = () => {
  return (
    <Container id="about-us">
      <Text>
        <Title>Who We Are...</Title>
        <p>
          Operating since 2013, our team of experienced and Qualified TSSA
          (Technical Standards & Safety Authority) Approved Technicians,
          specialize in all types of industrial and commercial Heating &
          Refrigeration equipment.
        </p>
        <p>
          We also provide a comprehensive range of backup services including
          call-out service, emergency breakdown and maintenance packages.
          Licensed & Insured under TSSA to Operate, Repair and Install Heating,
          Air and Ventilation services.
        </p>
      </Text>
    </Container>
  );
};

export default About;
