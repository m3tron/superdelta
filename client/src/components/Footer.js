const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-primary text-white text-center">
      &copy; {date.getFullYear()} Super Delta Heating & Cooling Inc.
    </footer>
  );
};

export default Footer;
