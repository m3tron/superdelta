import styled from "styled-components";

import furnace from "../assets/images/furnacesmall.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 2rem 1rem 1rem 1rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Card = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 var(--blue);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 var(--orange);
  }

  @media only screen and (min-width: 768px) {
    width: 30%;
  }
`;

const CardTitle = styled.div`
  background: var(--blue);
  color: #ffffff;
  font-size: 2rem;
  text-align: center;
  padding: 0.5rem 0 0.5rem;

  /* ${Card}:hover & {
    background: var(--orange);
    transition: 0.3s;
  } */
`;

const CardImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const Services = () => {
  const ServiceList = [
    {
      type: "Heating",
      image: furnace,
      description: "Description goes here",
    },
    {
      type: "Cooling",
      image: furnace,
      description: "Description goes here",
    },
    {
      type: "Gas Fitting",
      image: furnace,
      description: "Description goes here",
    },
  ];

  const ServiceCard = service => (
    <Card key={ServiceList.indexOf(service)}>
      <CardTitle>{service.type}</CardTitle>
      <CardImageContainer>
        <CardImage src={service.image} alt={service.type} />
      </CardImageContainer>

      <p>{service.description}</p>
    </Card>
  );

  return (
    <section id="services">
      <Container>{ServiceList.map(service => ServiceCard(service))}</Container>
    </section>
  );
};

export default Services;
