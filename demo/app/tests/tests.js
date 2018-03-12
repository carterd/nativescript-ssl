var Ssl = require("nativescript-ssl").Ssl;
var ssl = new Ssl();

describe("greet function", function() {
    it("exists", function() {
        expect(ssl.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(ssl.greet()).toEqual("Hello, NS");
    });
});