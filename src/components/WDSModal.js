const React = require('react');

const ModalContent = require('./content/ModalContent');
const CloseButton = require('./buttons/CloseButton');

/**
 * This is what would be called a Container component, or one that holds state.
 * State would then passed down to child components via props.
 */
const WDSModal = React.createClass({
	// Setting the initial state.
	getInitialState: function() {
		return {
			isOpen: false,
		}
	},
	handleModalToggle: function() {
		this.toggleModal();
	},
	toggleModal: function() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	},
	render: function() {
		return (
			<div className="modal-container">
				<div className="overlay"></div>
				<h1>WDSModal</h1>
				<CloseButton
					isOpen={this.state.isOpen}
					toggleModal={this.handleModalToggle}
				/>
				<ModalContent isOpen={this.state.isOpen} />
			</div>
		);
	}
});

module.exports = WDSModal;