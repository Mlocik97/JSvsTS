const object_javascript = /** @type {const} */ ({
	foo: 'example',
	bar: 'jsvsts',
});

object_javascript;
// ^?
/*
expected:

{
	readonly foo: "example";
    readonly bar: "jsvsts";
}
*/

object_javascript.zee; // this throws

/**
 * @template {string | number} T
 * @param {T} val
 * @returns {T extends string ? true : false}
 */
function generic_js(val) {
	return /** @type {T extends string ? true : false} */ (
		typeof val === 'string'
	);
}

const result1_js = generic_js('hello');
//    ^?
// expected: true

const result2_js = generic_js(7);
//    ^?
// expected: false

/*
 * Note there is also another syntax available to define generic function type:
 * @type {<T extends string | number>(val: T) => T extends string ? true : false}
 */

console.log("JavaScript works same way as TypeScript");