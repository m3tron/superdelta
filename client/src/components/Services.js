import styled from "styled-components";

import furnace from "../assets/images/furnacesmall.jpg";

const Container = styled.div`
  display: flex;

  justify-content: space-around;
  margin: 2rem 1rem 1rem 1rem;
`;

const Card = styled.div`
  width: 30%;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 var(--blue);
  transition: 0.5s;

  &:hover {
    box-shadow: 0 8px 16px 0 var(--orange);
  }
`;

const CardTitle = styled.div`
  background: var(--blue);
  color: #ffffff;
  font-size: 2rem;
  text-align: center;

  ${Card}:hover & {
    background: var(--orange);
    transition: 0.5s;
  }
`;

const CardImage = styled.img`
  width: 80%;

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
      type: "Air Conditioning",
      image: furnace,
      description: "Description goes here",
    },
  ];

  const ServiceCard = service => (
    <Card key={ServiceList.indexOf(service)}>
      <CardTitle>{service.type}</CardTitle>
      <CardImage src={service.image} alt={service.type} />
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
