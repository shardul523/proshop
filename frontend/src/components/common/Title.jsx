function Title({ children, size = "2xl" }) {
  const fontSize = `text-${size}`;
  return <h2 className={`${fontSize} font-semibold`}>{children}</h2>;
}
export default Title;
