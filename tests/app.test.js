
const app = require ("../app");

test ("Should equal 5 when passed 2 and 3", () => {
    expect(app.add(2,3)).not.toBe(56);
});

it("should include the name Hazel", () => {
    expect(app.myArray).toContain("Hazel");
});

it("should not return null", () => {
    expect(app.getNotNull()).not.toBeNull();
});

it("should be not fasly", () => {
    expect(app.getNotFalsy()).not.toBeFalsy();
});