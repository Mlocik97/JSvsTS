const object_typescript = {
	foo: 'example',
	bar: 'jsvsts',
} as const;

object_typescript;
// ^?
/*
expected:

{
	readonly foo: "example";
    readonly bar: "jsvsts";
}
*/

object_typescript.zee; // this throws

function generic_ts<T extends string | number>(val: T): T extends string ? true : false {
	return (typeof val === 'string') as T extends string ? true : false;
}

const result1_ts = generic_ts("hello");
//    ^?
// expected: true

const result2_ts = generic_ts(7);
//    ^?
// expected: false

console.log("TypeScript works same way as JavaScript");