'use sctrict';

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) || 0);

const setTime = time => localStorage.setItem(LOCALSTORAGE_KEY, time.seconds);

player.on('timeupdate', throttle(setTime, 1000));