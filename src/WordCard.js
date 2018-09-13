import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';

export default class WordCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attempt: '',
        }
    }


    render() {
        return (
            <div>
                {Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i} />)}
            </div>
        );
    }
}
