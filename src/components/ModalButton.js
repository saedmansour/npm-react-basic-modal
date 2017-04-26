import React from 'react';
import PropTypes from 'prop-types';

class ModalButton extends React.Component {

    componentDidMount() {
    }

    render() {
        var onclick = this.props.handler;
        var buttonText = this.props.text;

        return (
          <button className='modal-button' onclick={onclick}>{buttonText}</button>
        )
    }

};

ModalButton.propTypes = {
    handler: PropTypes.func,
    text: PropTypes.string
};

export default ModalButton;
