const loadScript = require('load-script2');
const esTest = require('./es-test');

console.log('esTest', esTest);

loadScript(`app.es${esTest}.js`, (err, script) => {
    if (err) {
        throw err;
    }
    console.log(`${script.src} loaded`);
});
