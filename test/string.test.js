import { describe, expect, test } from "bun:test";
import { DateOnly } from "../lib";

describe("Creating strings from date only options", () => {
	const testCases = [
		{ year: 2044, month: 3, date: 9, expected: "2044-03-09" },
		{ year: 2044, month: 10, date: 9, expected: "2044-10-09" },
		{ year: 2044, month: 3, date: 19, expected: "2044-03-19" },
		{ year: 2044, month: 11, date: 22, expected: "2044-11-22" },
		{ year: 44, month: 11, date: 22, expected: "1944-11-22" },
	];

	for (const tc of testCases) {
		test(`ToString: ${tc.expected}`, () => {
			const d = new DateOnly(tc.year, tc.month, tc.date);
			expect(d.toString()).toBe(tc.expected);
		});
	}

	for (const tc of testCases) {
		test(`ISO String: ${tc.expected}`, () => {
			const d = new DateOnly(tc.year, tc.month, tc.date);
			expect(d.toISOString()).toBe(`${tc.expected}T00:00:00.000Z`);
		});
	}

	test("ISO String: bad DateOnly", () => {
		const d = DateOnly.fromString("THIS WILL MAKE AN INVALID DateOnly kj;a!!!");
		expect(d.toISOString()).toBe("Invalid DateOnly");
	});

	test("Date Strings", () => {
		const loops = 200;
		for (let k = 0; k < loops; k++) {
			let y = Math.ceil(Math.random() * 4000);
			const m = Math.ceil(Math.random() * 12);
			const day = Math.ceil(Math.random() * 28);

			if (Math.random() < 0.2) {
				y *= -1;
			}

			const dt = new Date(Date.UTC(y, m - 1, day, 0, 0, 0));
			const d = new DateOnly(y, m, day);
			expect(d.toISOString()).toBe(dt.toISOString());
		}
	});
});
