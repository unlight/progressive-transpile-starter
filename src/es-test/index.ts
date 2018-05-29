export function testEsVersion({ document = window.document } = {}): string {
    const match = document.cookie.match(/esVersion=(\d+)/);
    if (match) {
        return match[1];
    }
    let result = '5';
    try {
        eval(require('./es2015.testjs'));
        result = '2015';
    } catch { }
    document.cookie = `esVersion=${result}; expires=${(new Date((new Date()).getTime() + 2678400000)).toUTCString()}; path=/`;
    return result;
}
