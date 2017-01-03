import YoutubePlayer from 'youtube-player';

const initialState = {
    player: {}
}

const player = (state = initialState, action) => {
    switch (action.type){
	case 'LOAD':
	    return {
		player: YoutubePlayer('player', {videoId: action.videoID})
	    }
	case 'PLAY':
	    return {}
	case 'PAUSE':
	    return {}
	case 'STOP':
	    return {}
	case 'PREVIOUS':
	    return {}
	case 'NEXT':
	    return {}
	default:
	    return state;
    }
}

export default player
