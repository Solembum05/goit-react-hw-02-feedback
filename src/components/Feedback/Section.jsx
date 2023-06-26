const Section = ({title, children }) => {
  return (
    <div>
      <h2> {title}</h2>
      <section>{children[0]}</section>
      <section>{children[1]}</section>
    </div>
  );
};
export default Section;
