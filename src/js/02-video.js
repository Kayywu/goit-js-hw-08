'use sctrict';

import Player from '@vimeo/player';
import throttle from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);

    if (data.duration === data.seconds) {
        data.seconds = 0;
        localStorage.setItem('videoplayer-current-time', data.seconds);
    }
};

player.on('timeupdate', throttle(currentTime, 1000));

player
.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
.then(function (seconds){})
.catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;
            default:
                break;
    }
})