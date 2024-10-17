// The builtin Date object does not fail or throw errors on construction so we
// need to do our best to do the same. No errors, let users put in crazy crap

//TODO:
// toJSON
// toString
// fromString
// fromDate
// month and date roll overs
// Handle invalid inputs like objects, arrays, and booleans

/** A date object with without time */
class DateOnly {
	#date;
	#month;
	#year;
	#invalid;

	/**
	 * Create a new DateOnly object
	 * @param{number} [year] The year the of the date
	 * @param{number} [month] The year the of the date
	 * @param{number} [date] The year the of the date
	 */
	constructor(year = 1970, month = 1, date = 1) {
		this.#invalid = false;
		this.#year = +year;
		this.#month = +month;
		this.#date = +date;
	}

	/**
	 * Return the year only from the DateOnly
	 * @returns{number}
	 */
	getFullYear() {
		return this.#year;
	}

	/**
	 * Return the month value from the DateOnly.
	 * Indexed from 1, 12 is december
	 * @returns{number}
	 */
	getMonth() {
		return this.#month;
	}

	/**
	 * Return the date value, or the day of the month
	 * Indexed from 1, max of 31 depending the month
	 * @returns{number}
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
	 * Return the month value from the DateOnly.
	 * Indexed from 1, 12 is december
	 * @param {number} v The new desired value for the value
	 */
	setMonth(v) {
		if (v < 1) {
			for (let start = v; start < 1; start += 12) {
				this.#year -= 1;
			}
			const m = 11 - (Math.abs(v) % 12) + 1;
			this.#month = m;
			return;
		}

		if (12 < v) {
			for (let mth = v; 12 < mth; mth -= 12) {
				this.#year += 1;
			}
			this.#month = (v % 12) + 1;
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
	 * @returns{string} the date represented as a string
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
	 * @returns{string} the date represented as an ISO8601 string
	 */
	toISOString() {
		return `${this.#year}${sep}${this.#month}${sep}${this.#date}T:00:00:00.000Z`;
	}

	toDateString() {
		return "Thu Oct 17 2024";
	}
}

export { DateOnly };
