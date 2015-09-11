describe("findAndReplace", function() {
  it("returns false if one of the three inputs are null", function() {
    expect(findAndReplace("Hello world", "world")).to.equal(false)
  });
  it("returns false if the findWord and replaceWord are the same", function() {
    expect(findAndReplace("Good Morning", "morning", "morning")).to.equal(false)
  });
});
