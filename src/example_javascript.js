const object_javascript = /** @type {const} */ ({
	foo: 'example',
	bar: 'jsvsts',
});

object_javascript;
// ^?

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

const result2_js = generic_js(7);
//    ^?

/*
 * Note there is also another syntax available to define generic function type:
 * @type {<T extends string | number>(val: T) => T extends string ? true : false}
 */

console.log("JavaScript works same way as TypeScript");