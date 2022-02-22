import PropTypes from 'prop-types';

const Errors = ({ errors }) => (
    errors.length ? (
        <ul className="errors">
            {errors.map((error) => <li key={error}>{error}</li>)}
        </ul>
    ) : null
);

Errors.defaultProps = {
    errors: []
};

Errors.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string)
};

export default Errors;