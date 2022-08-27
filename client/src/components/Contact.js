import styled from "styled-components";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Container = styled.div`
  background-color: #ffffff;
  color: var(--blue);
  padding: 1rem;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  line-spacing: 1;

  @media only screen and (min-width: 1000px) {
    flex-direction: row-reverse;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

const Info = styled.div`
  font-size: 1.15rem;
  margin: 1rem 0;
  text-align: center;

  i {
    margin-right: 1rem;
  }

  &:hover {
    color: var(--orange);
  }

  @media only screen and (min-width: 1000px) {
    text-align: left;
  }
`;

const Contact = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
  });

  const center = { lat: 43.669262, lng: -79.601283 };

  return (
    <Container id="contact">
      <Title>Contact us</Title>
      <ContactContainer>
        <div>
          <Info>
            <i className="fa-solid fa-phone" />
            <a href="tel:6473300234">(647) 330-0234</a>
          </Info>
          <Info>
            <i className="fa-solid fa-at" />
            <a href="mailto:superdeltainc@gmail.com">superdeltainc@gmail.com</a>
          </Info>
          <Info>
            <i class="fa-solid fa-location-pin" />
            Operating in the Greater Toronto Area
          </Info>
        </div>
        <div>
          {!isLoaded ? (
            <>Loading...</>
          ) : (
            <GoogleMap
              zoom={10}
              center={center}
              mapContainerClassName="map-container"
            >
              <Marker center={center} />
            </GoogleMap>
          )}
        </div>
      </ContactContainer>
    </Container>
  );
};

export default Contact;
