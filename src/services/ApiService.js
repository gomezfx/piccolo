

const ENDPOINT = 'http://raspberrypi.lan:4502';

export default {

    getHygrometerData() {
        return fetch(ENDPOINT + '/hygrometer');
    },

    getAcStatus() {
        return fetch(ENDPOINT + '/ac');
    }

};