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

// const CardImage = styled.img`
//   width: 100%;
//   height: auto;
// `;

const CardIcon = styled.i`
  font-size: 3rem;
  margin: 1rem;
  color: var(--blue);
`;

const CardDescription = styled.div`
  text-align: center;
  padding: 1rem;
  color: var(--blue);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: var(--blue);
`;

const Services = () => {
  const ServiceList = [
    {
      type: "Heating",
      image: furnace,
      icon: "fas fa-fire",
      description:
        "Description goes here. A couple of paragraphs or some bullet points",
    },
    {
      type: "Ventilation",
      image: furnace,
      icon: "fas fa-wind",
      description:
        "Description goes here. A couple of paragraphs or some bullet points",
    },
    {
      type: "Cooling",
      image: furnace,
      icon: "fas fa-snowflake",
      description:
        "Description goes here. A couple of paragraphs or some bullet points",
    },
  ];

  const ServiceCard = service => (
    <Card key={ServiceList.indexOf(service)}>
      <CardTitle>{service.type}</CardTitle>
      <CardImageContainer>
        {/* <CardImage src={service.image} alt={service.type} /> */}
        <CardIcon className={service.icon} />
      </CardImageContainer>

      <CardDescription>{service.description}</CardDescription>
    </Card>
  );

  return (
    <>
      <Title>What We Do...</Title>
      <Container id="services">
        {ServiceList.map(service => ServiceCard(service))}
      </Container>
    </>
  );
};

export default Services;
