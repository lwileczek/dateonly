import { expect, test, describe } from "bun:test";
import { DateOnly } from '../src'

const loops = 100;

describe("Creating DateOnly Objects", () => {
    test("With no params", () => {
        const d = new DateOnly()
        expect(d.getFullYear()).toBe(1970);
        expect(d.getMonth()).toBe(1);
        expect(d.getDate()).toBe(1);
    });

    test("Create with random [in bounds] inputs", () => {
        for (let k = 0; k < loops; k++) {
            const y = Math.ceil(Math.random() * 4000)
            const d = new DateOnly(y)
            expect(d.getFullYear()).toBe(y);
            expect(d.getMonth()).toBe(1);
            expect(d.getDate()).toBe(1);
        }
    });

    test("Create with random [in bounds] strings of number", () => {
        for (let k = 0; k < loops; k++) {
            const y = Math.ceil(Math.random() * 4000)
            const m = Math.ceil(Math.random() * 12)
            const d = Math.ceil(Math.random() * 28)
            const date = new DateOnly(`${y}`, `${m}`, `${d}`);

            expect(date.getFullYear()).toBe(y);
            expect(date.getMonth()).toBe(m);
            expect(date.getDate()).toBe(d);
        }
    });

    test("Month is never greater than 12", () => {
        const y = 2000 + Math.ceil(Math.random() * 400)
        const d = Math.ceil(Math.random() * 28)
        for (let k = 0; k < loops; k++) {
            const sign = Math.random() < 0.43 ? -1 : 1;
            const date = new DateOnly(y, sign * k, d);
            expect(date.getMonth()).toBeLessThan(13);
        }
    });

    test("Month is never less than 1", () => {
        const y = 2000 + Math.ceil(Math.random() * 400)
        const d = Math.ceil(Math.random() * 28)
        for (let k = 0; k < loops; k++) {
            const sign = Math.random() < 0.43 ? -1 : 1;
            const date = new DateOnly(y, sign * k, d);
            expect(date.getMonth()).toBeGreaterThan(0);
        }
    });
});

describe('Changing values after create', () => {
    test("Month is never greater than 12", () => {
        const y = 2000 + Math.ceil(Math.random() * 400)
        const d = Math.ceil(Math.random() * 28)
        const m = Math.ceil(Math.random() * 12)
        for (let k = 0; k < loops; k++) {
            const sign = Math.random() < 0.43 ? -1 : 1;
            const date = new DateOnly(y, m, d);
            date.setMonth(sign * k);
            expect(date.getMonth()).toBeLessThan(13);
        }
    });

    test("Month is never less than 1", () => {
        const y = 2000 + Math.ceil(Math.random() * 400)
        const d = Math.ceil(Math.random() * 28)
        const m = Math.ceil(Math.random() * 12)
        for (let k = 0; k < loops; k++) {
            const sign = Math.random() < 0.43 ? -1 : 1;
            const date = new DateOnly(y, m, d);
            date.setMonth(sign * k);
            expect(date.getMonth()).toBeGreaterThan(0);
        }
    });
})
