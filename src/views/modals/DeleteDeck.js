import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from './Modal';
import {deleteDeck} from '../../actions';

class DeleteDeck extends Component {
    onCancelPress = () => {
        this.props.history.goBack();
    }
    onDeletePress = () => {
        this.props.deleteDeck();
        this.props.history.push({pathname: '/main/deck-overview'});
    }

    render() {
        return (
            <Modal 
                onCancelPress={this.onCancelPress}
                onDeletePress={this.onDeletePress}
                text='Are you sure you want to delete this deck?'
            />
        );
    }
};

export default withRouter(connect(null, {
    deleteDeck
})(DeleteDeck));