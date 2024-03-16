function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className=" text-center">Proshop &copy; {currentYear}</footer>;
}

export default Footer;
