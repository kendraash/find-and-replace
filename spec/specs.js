describe("findAndReplace", function() {
  it("returns false if one of the three inputs are null", function() {
    expect(findAndReplace("Hello world", "world")).to.equal(false)
  });
  it("returns false if the findWord and replaceWord are the same", function() {
    expect(findAndReplace("Good Morning", "morning", "morning")).to.equal(false)
  });

  it("returns the new sentence with the replaceWord", function() {
    expect(findAndReplace("Good morning", "morning", "evening")).to.equal("Good evening")
  });

});
