import React from 'react';
import {Button} from 'react-toolbox/lib/button';

const PlayerButtons = () => (
    <div>
	<Button icon="stop" floating />
	<Button icon="skip_previous" floating />
	<Button icon="pause" floating />
	<Button icon="play_arrow" floating />
	<Button icon="skip_next" floating />
    </div>
);

export default PlayerButtons;
