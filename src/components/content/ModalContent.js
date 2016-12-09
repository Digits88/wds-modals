const React = require('react');

const ModalContent = React.createClass({
	render: function() {
		if (this.props.isOpen === false) {
			return null;
		}

		return (
			<h2>Here is Modal Content!</h2>
		);
	}
});

module.exports = ModalContent;