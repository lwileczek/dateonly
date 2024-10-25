/**
 * Welcome to @patient-otter/DateOnly.js
 * @author lwileczek <pleazenospam@protonmail.com>
 */

// The builtin Date object does not fail or throw errors on construction so we
// need to do our best to do the same. No errors, let users put in crazy crap

const dayAbbreviation = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthAbbreviation = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//TODO:
// date roll overs
// Handle invalid inputs like objects, arrays, and booleans

/** A date object with without time */
class DateOnly {
    /** @private */
	#date = 1;
    /** @private */
	#month = 1;
    /** @private */
	#year = 1970;
    /** @private */
	#invalid = false;

	/**
     * @constructor
	 * Create a new DateOnly object
	 * @param {number} [year=1970] The year the of the date
     * @param {number} [date=1] The year the of the date
	 * @param {number} [month=1] The year the of the date
	 */
	constructor(year = 1970, month = 1, date = 1) {
		this.#year = +year;
		this.setMonth(+month);
		this.#date = +date;
	}

	/**
	 * Crete a DateOnly Object from a number, numbers represent the days since
	 * 1 Jan 1970
	 * @param {number} n The number to be converted to a DateOnly Object
	 */
	static fromNumber(n) {
		const d = new Date(Date.UTC(1970, 1, 1, 0, 0, 0));
		d.setUTCDate(d.getUTCDate() + n);
		return new DateOnly(d.getFullYear(), d.getUTCMonth() + 1, d.getUTCDate());
	}

	/**
	 * Create a DateOnly Object from some string. Wraps new Date(str)
	 * @param {string} s The string to read the date info from
	 */
	static fromString(s) {
		if (!DateOnly.#isDate(s)) {
			return DateOnly.#createInvalidDate();
		}

		const d = new Date(s);
		return new DateOnly(d.getFullYear(), d.getUTCMonth() + 1, d.getUTCDate());
	}

	/**
	 * Create a DateOnly Object from some string. Wraps new Date(str)
	 * @param {Date} d The date to use in creating a new DateOnly object
	 * using the date's UTC values
	 */
	static fromDate(d) {
		if (!DateOnly.#isDate(d)) {
			return DateOnly.#createInvalidDate();
		}

		return new DateOnly(d.getFullYear(), d.getUTCMonth() + 1, d.getUTCDate());
	}

	/**
     * Create a new DateOnly object for the current date
     * @returns {DateOnly} A donly only object with the current local date
	 */
	static now() {
		const d = new Date();
		return new DateOnly(d.getFullYear(), d.getMonth() + 1, d.getDate());
	}

	/**
     * @private
	 * Check if an input returns a valid date object
     * @param {*} val some input to be passed to new Date and checked for validity
	 */
	static #isDate(val) {
		return !Number.isNaN(new Date(val).getTime());
	}

	/**
     * @private
	 * Create an invaid DateOnly object
     * @returns {DateOnly} A date only object with it's invalid property set true
	 */
	static #createInvalidDate() {
		const dt = new DateOnly();
		dt.#invalid = true;
		return dt;
	}

	/**
	 * Return the year only from the DateOnly
	 * @returns {number}
	 */
	getFullYear() {
		return this.#year;
	}

	/**
	 * Return the month value from the DateOnly.
	 * Indexed from 1, 12 is december
	 * @returns {number}
	 */
	getMonth() {
		return this.#month;
	}

	/**
	 * Return the date value, or the day of the month
	 * Indexed from 1, max of 31 depending the month
	 * @returns {number}
	 */
	getDate() {
		return this.#date;
	}

	/**
	 * Return the year only from the DateOnly
	 * @param {number} v The new desired value for the year
	 */
	setFullYear(v) {
		this.#year = +v;
	}

	/**
	 * Get day of the week
	 */
	getDay() {
		const d = new Date(Date.UTC(this.#year, this.#month - 1, this.#date, 0, 0, 0));
		return d.getUTCDay();
	}

	/**
	 * Return the month value from the DateOnly.
	 * Indexed from 1, 12 is december
	 * @param {number} v The new desired value for the value
	 */
	setMonth(v) {
		if (v < 1) {
			const end = v * -1;
			for (let m = 0; m <= end; m++) {
				if (this.getMonth() <= 1) {
					this.#month = 12;
					this.#year -= 1;
					continue;
				}
				this.#month--;
			}
			return;
		}

		if (12 < v) {
			this.#year++;
			for (let mth = 0; mth < v - 12; mth++) {
				if (this.#month >= 12) {
					this.#year++;
					this.#month = 1;
					continue;
				}
				this.#month++;
			}
			return;
		}

		this.#month = v;
	}

	/**
	 * Set the date value, or the day of the month
	 * @param {number} v The new desired value for the date
	 */
	setDate(v) {
		this.#date = v;
	}

	/**
	 * Set the date value, or the day of the month
	 * @param {string} [sep=-] The seperator to use between date components
	 * @returns {string} the date represented as a string
	 */
	toString(sep = "-") {
		if (this.#invalid) {
			return "Invalid DateOnly";
		}

		return `${this.#year}${sep}${this.#month}${sep}${this.#date}`;
	}

	/**
	 * Return a string in ISO8601 format
	 * All time values are set to zero
	 * @returns {string} the date represented as an ISO8601 string
	 */
	toISOString() {
		if (this.#invalid) {
			return "Invalid DateOnly";
		}
		return `${this.#year}${sep}${this.#month}${sep}${this.#date}T:00:00:00.000Z`;
	}

	/**
	 * JSON serializes the date to an ISO8601 date
	 * @returns {string} the date represented as an ISO8601 string
	 */
	toJSON() {
		return this.toISOString();
	}

	/**
	 * Returns a Date stirng
	 */
	toDateString() {
		if (this.#invalid) {
			return "Invalid DateOnly";
		}
		return `${dayAbbreviation[this.getDay()]} ${monthAbbreviation[this.getMonth() - 1]} ${this.getDate()} ${this.getFullYear()}`;
	}

	/**
	 * Returns if the current date time object is valid or not
	 */
	isValid() {
		return !this.#invalid;
	}
}

export { DateOnly };
