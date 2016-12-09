const React = require('react');
const PropTypes = React.PropTypes;

/**
 * An example of a stateless, functional component.
 * It has access to the props that were passed down to it from the parent component.
 */
const CloseButton = function(props) {
	const buttonText = props.isOpen ? 'Close' : 'Open';
	return (
		<button onClick={props.toggleModal}>{buttonText}</button>
	)
};

/**
 * PropTypes allow for type checking the properties being passed in.
 */
CloseButton.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	toggleModal: PropTypes.func.isRequired
};

module.exports = CloseButton;