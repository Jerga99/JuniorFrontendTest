describe("Github APP tests", function() {

    var jsonTest1 = "{'name': 'Bob', 'occupation': 'Plumber'}";
    var jsonTest2 = "{'name': Bob', 'occupation': 'Plumber'}";

    describe("when user object is created", function(){

        it("should be able to create object from JSONs", function() {
            expect((dataController.addUser(jsonTest1,jsonTest2)).toEqual({}));
        });
    });
});