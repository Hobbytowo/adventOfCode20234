const fs = require('fs');

export default function readModuleFile(path: string, callback: any) {
    try {
        const filename = require.resolve(path);
        fs.readFile(filename, 'utf8', callback);
    } catch (e) {
        callback(e);
    }
}