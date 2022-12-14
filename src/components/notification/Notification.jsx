import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
    <div style={{ fontSize: "20px", border: "1px dashed black", borderRadius: "10px", padding: "10px", textAlign: "center" }}>{message}</div>)

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}