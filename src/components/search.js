import React from 'react';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import { connect } from 'react-redux';
import {store} from '../index';   
import loadPlayer from '../actions/index'

const handleSearchClick = (videoID) => {
    store.dispatch(loadPlayer(videoID))
}

const Search = () => (
    <div>
 	<Input type='text' id="videoId" label='videoID' floating/>
 	<Button icon="search" floating
		onClick="" />
    </div>
);

export default connect()(Search);
