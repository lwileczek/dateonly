export default DateOnly;
/** A date object with without time */
export class DateOnly {
	/**
	 * Crete a DateOnly Object from a number, numbers represent the days since
	 * 1 Jan 1970
	 * @param {number} n The number to be converted to a DateOnly Object
	 */
	static fromNumber(n: number): DateOnly;
	/**
	 * Create a DateOnly Object from some string. Wraps new Date(str)
	 * @param {string} s The string to read the date info from
	 */
	static fromString(s: string): DateOnly;
	/**
	 * Create a DateOnly Object from some string. Wraps new Date(str)
	 * @param {Date} d The date to use in creating a new DateOnly object
	 * using the date's UTC values
	 */
	static fromDate(d: Date): DateOnly;
	/**
	 * Create a new DateOnly object for the current date
	 * @returns {DateOnly} A donly only object with the current local date
	 */
	static now(): DateOnly;
	/**
	 * @private
	 * Check if an input returns a valid date object
	 * @param {*} val some input to be passed to new Date and checked for validity
	 */
	private static "__#1@#isDate";
	/**
	 * @private
	 * Create an invaid DateOnly object
	 * @returns {DateOnly} A date only object with it's invalid property set true
	 */
	private static "__#1@#createInvalidDate";
	/**
	 * @constructor
	 * Create a new DateOnly object
	 * @param {number} [year=1970] The year the of the date
	 * @param {number} [date=1] The year the of the date
	 * @param {number} [month=1] The year the of the date
	 */
	constructor(year?: number, month?: number, date?: number);
	/**
	 * Return the year only from the DateOnly
	 * @returns {number}
	 */
	getFullYear(): number;
	/**
	 * Return the month value from the DateOnly.
	 * Indexed from 1, 12 is december
	 * @returns {number}
	 */
	getMonth(): number;
	/**
	 * Return the date value, or the day of the month
	 * Indexed from 1, max of 31 depending the month
	 * @returns {number}
	 */
	getDate(): number;
	/**
	 * Return the year only from the DateOnly
	 * @param {number} v The new desired value for the year
	 */
	setFullYear(v: number): void;
	/**
	 * Get day of the week
	 */
	getDay(): number;
	/**
	 * Return the month value from the DateOnly.
	 * Indexed from 1, 12 is december
	 * @param {number} v The new desired value for the value
	 */
	setMonth(v: number): void;
	/**
	 * Set the date value, or the day of the month
	 * @param {number} v The new desired value for the date
	 */
	setDate(v: number): void;
	/**
	 * Set the date value, or the day of the month
	 * @param {string} [sep=-] The seperator to use between date components
	 * @returns {string} the date represented as a string
	 */
	toString(sep?: string): string;
	/**
	 * Return a string in ISO8601 format
	 * All time values are set to zero
	 * @returns {string} the date represented as an ISO8601 string
	 */
	toISOString(): string;
	/**
	 * JSON serializes the date to an ISO8601 date
	 * @returns {string} the date represented as an ISO8601 string
	 */
	toJSON(): string;
	/**
	 * Returns a Date stirng
	 */
	toDateString(): string;
	/**
	 * Returns if the current date time object is valid or not
	 */
	isValid(): boolean;
	#private;
}
//# sourceMappingURL=index.d.ts.map
