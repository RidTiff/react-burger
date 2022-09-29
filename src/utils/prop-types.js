import PropTypes from 'prop-types';

const ingredientPropType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

export default ingredientPropType