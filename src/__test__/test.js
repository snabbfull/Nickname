import Validator from "../index.js";

const validator =  new Validator();

test("валидные имена", () => {
    expect(validator.validateUsername("Igor_D")).toBe(true);
});

test("некорректные символы", () => {
    expect(validator.validateUsername("Имя")).toBe(false);
    expect(validator.validateUsername("Igor!")).toBe(false);
    expect(validator.validateUsername("Hello World")).toBe(false);
});

test("слишком много цифр подряд", () => {
    expect(validator.validateUsername("User1234")).toBe(false);
    expect(validator.validateUsername("A0000B")).toBe(false);
});

test("начинается или заканчивается неправильно", () => {
    expect(validator.validateUsername("1User")).toBe(false);
    expect(validator.validateUsername("-User")).toBe(false);
    expect(validator.validateUsername("_User")).toBe(false);
    expect(validator.validateUsername("User1")).toBe(false);
    expect(validator.validateUsername("User-")).toBe(false);
    expect(validator.validateUsername("User_")).toBe(false);
});

test("пустая строка или не строка", () => {
    expect(validator.validateUsername("")).toBe(false);
    expect(validator.validateUsername(12345)).toBe(false);
});