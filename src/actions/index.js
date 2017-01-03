let player;

export const loadPlayer = (videoID) => {
    return {
	type: 'LOAD',
	videoID
    }
}

export const playVideo = (player) => {
    return {
	type: 'PLAY',
	player
    }
}

export const pauseVideo = (player) => {
    return {
	type: 'PAUSE',
	player
    }
}

export const stopVideo = (player) => {
    return {
	type: 'STOP',
	player
    }
}
