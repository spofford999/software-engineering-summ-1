const { banana_scale } = require('./script')

test("Test Jest is working", () => {
    expect(2+2).toBe(4);
});

test("Check calculation of positive number 18", () => {
    expect(banana_scale(17)).toBe(100);
});

test("Check calculation of negative number -5", () => {
    expect(banana_scale(-10)).toBe("Please enter a positive number!");
});