function testEsVersion() {
    const match = document.cookie.match(/esVersion=(\d+)/);
    if (match) {
        return match[1];
    }
    let result = '5';
    const es2015Test = require('./es2015.testjs');
    try {
        eval(es2015Test);
        result = '2015';
    } catch { }
    document.cookie = `esVersion=${result}; expires=${(new Date((new Date()).getTime() + 2678400000)).toUTCString()}; path=/`;
    return result;
}

module.exports = testEsVersion();
