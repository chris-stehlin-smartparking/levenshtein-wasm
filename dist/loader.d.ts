/// <reference types="./types/webassembly" />
export declare function instantiate<T extends {}>(module: WebAssembly.Module, imports?: ImportsObject): ASUtil & T;
export declare function instantiateBuffer<T extends {}>(buffer: Uint8Array, imports?: ImportsObject): ASUtil & T;
export declare function demangle<T extends Record<string, any>>(exports: Record<string, any>, baseModule: {}): T;
interface ImportsObject extends Record<string, any> {
    env?: {
        memory?: WebAssembly.Memory;
        table?: WebAssembly.Table;
        abort?: (msg: number, file: number, line: number, column: number) => void;
        trace?: (msg: number, numArgs?: number, ...args: any[]) => void;
    };
}
declare type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array;
interface ASUtil {
    readonly I8: Uint8Array;
    readonly U8: Uint8Array;
    readonly I16: Uint16Array;
    readonly U16: Uint16Array;
    readonly I32: Uint32Array;
    readonly U32: Uint32Array;
    readonly I64: any;
    readonly U64: any;
    readonly F32: Float32Array;
    readonly F64: Float64Array;
    __start(): void;
    __allocString(str: string): number;
    __getString(ref: number): string;
    __allocArray(id: number, values: number[]): number;
    __getArray(ref: number): number[];
    __getArrayView(ref: number): TypedArray;
    __retain(ref: number): number;
    __release(ref: number): void;
    __alloc(size: number, id: number): number;
    __instanceof(ref: number, baseId: number): boolean;
    __collect(): void;
}
export {};
