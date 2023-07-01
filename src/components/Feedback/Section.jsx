import css from './Section.module.css'
import PropTypes from 'prop-types';


const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={css.title}> {title}</h2>
      <section>{children[0]}</section>
      <section>{children[1]}</section>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
