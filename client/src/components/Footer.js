const Footer = () => {
  const date = new Date();

  return (
    <footer>
      &copy; {date.getFullYear()} Super Delta Heating & Cooling Inc.
    </footer>
  );
};

export default Footer;
