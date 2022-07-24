import throttle from 'lodash.throttle'
import Player from '@vimeo/player';
    
    

    const iframe = document.querySelector('iframe');
    
    const player = new Player(iframe);
    

const PLAYER_CURRENT_TIME = "videoplayer-current-time";

let timeupdate = 0;

const onPlay = function (data) {

    timeupdate = data.seconds;

    localStorage.setItem(PLAYER_CURRENT_TIME, JSON.stringify(timeupdate));
};

player.on('timeupdate', throttle( onPlay, 1000));


if (localStorage.getItem(PLAYER_CURRENT_TIME)) {
     player.setCurrentTime(localStorage.getItem(PLAYER_CURRENT_TIME));
}
