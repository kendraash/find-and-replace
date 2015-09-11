describe("findAndReplace", function() {
  it("returns false if one of the three inputs are null", function() {
    expect(findAndReplace("Hello world", "wordld")).to equal(false);
  });
});
