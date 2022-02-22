import PropTypes from 'prop-types';

const TextArea = ({
    label,
    id,
    name,
    value,
    onChange,
    readOnly
}) => (
    <>
        <label className="label" htmlFor={id}>{label}</label>
        <textarea
            {...{ id, name, onChange, readOnly, value }}
            className="textarea"
            rows={15}
        />
    </>
);

TextArea.defaultProps = {
    value: '',
    onChange: null,
    readOnly: false
};

TextArea.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    readOnly: PropTypes.bool
};

export default TextArea;