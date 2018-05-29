import { testEsVersion } from './es-test';
import loadScript = require('load-script2');

loadScript(`app.es${testEsVersion()}.js`, (err, script) => {
    if (err) {
        throw err;
    }
    console.log(`${script.src} loaded`);
});
