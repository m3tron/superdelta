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
  line-spacing: 2;

  @media only screen and (min-width: 850px) {
    flex-direction: row-reverse;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
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
          <div>(647) 330-0234</div>
          <div>superdeltainc@gmail.com</div>
          <div>
            <div>Operating in the Greater Toronto Area</div>
          </div>
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
