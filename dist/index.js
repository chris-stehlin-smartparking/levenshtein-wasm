"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const loader_1 = require("./loader");
const wasmModule = loader_1.instantiateBuffer(fs_1.readFileSync(path_1.join(__dirname, '..', 'build', 'optimized.wasm')));
function levenshtein(a, b) {
    if (a === b)
        return 0;
    if (a.length > b.length)
        [a, b] = [b, a];
    const ptrB = wasmModule.__retain(wasmModule.__allocString(b));
    const ptrA = wasmModule.__retain(wasmModule.__allocString(a));
    try {
        return wasmModule.levenshtein(ptrA, ptrB);
    }
    finally {
        wasmModule.__release(ptrA);
        wasmModule.__release(ptrB);
    }
}
exports.levenshtein = levenshtein;
//# sourceMappingURL=index.js.map