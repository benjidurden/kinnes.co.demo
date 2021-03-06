import {easyStore} from 'react-easy-state';
import {easyParams} from 'react-easy-params';

const storage = easyStore({
    prints: 2,
    shirtSize: '',
    shirts: 1,
    hasShirtInCart: false,
    hasPrintsInCart: false,
    name: "",
})

easyParams(storage, {
    prints: ['url', 'history'],
    shirtSize: ['url', 'history'],
})

export default storage;