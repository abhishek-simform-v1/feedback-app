import PropTypes from 'prop-types';

const Header = ({ title }) => {
  let HeaderStyle = {
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95',
  };
  return (
    <header style={HeaderStyle}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  );
};
Header.defaultProps = {
  title: 'Feedback Ui',
};
Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
