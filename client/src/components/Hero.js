import styled from "styled-components";

import img1 from "../assets/images/thermostat.jpg";

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const HeroContainer = styled.div`
  height: 720px;
  /* width: 1280px; */
  overflow: hidden;
`;

const HeroContent = styled.div`
  background: url(${img1}) center;
  height: 100%;
  width: 100vw;
`;

const MottoContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Motto = styled.div`
  color: var(--blue);
  margin: 0 0 0 1rem;
  text-align: center;
  font-weight: bold;
  line-height: 5rem;
  text-shadow: 2px 2px #ffffff;
  font-size: 2.5rem;
  /* font-size: 5rem; */
`;

const Hero = () => {
  return (
    <Container id="home">
      <HeroContainer>
        <HeroContent>
          <MottoContainer>
            <div>
              <Motto>Professional Home Comfort Solutions</Motto>
            </div>
          </MottoContainer>
        </HeroContent>
      </HeroContainer>
    </Container>
  );
};

export default Hero;
