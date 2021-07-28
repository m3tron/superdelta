import styled from "styled-components";

import img1 from "../assets/images/homecropped.jpg";

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const HeroContainer = styled.div`
  height: 800px;
  /* width: 1280px; */
  overflow: hidden;
`;

const HeroContent = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.4)),
    url(${img1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100vw;
`;

const MottoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Motto = styled.div`
  color: #ffffff;
  margin: 0 0 0 1rem;
  text-align: center;
  font-weight: bold;
  line-height: 5rem;
  text-shadow: 2px 2px var(--blue);
  font-size: 3rem;
`;

const MottoDescription = styled.div`
  color: #ffffff;
  margin: 0 0 0 1rem;
  text-align: center;
  font-weight: bold;
  line-height: 5rem;
  text-shadow: 2px 2px var(--blue);
  font-size: 2rem;
`;

const Hero = () => {
  return (
    <Container id="home">
      <HeroContainer>
        <HeroContent>
          <MottoContainer>
            <div>
              <Motto>Professional Home Comfort Solutions</Motto>
              <MottoDescription>
                Serving the Greater Toronto Area
              </MottoDescription>
            </div>
          </MottoContainer>
        </HeroContent>
      </HeroContainer>
    </Container>
  );
};

export default Hero;
