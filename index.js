var User = /** @class */ (function () {
    /**
     *
     * @param name :userModel
     */
    function User(name) {
        this.lastname = name;
        this.name = "";
        this.fruits = ["apple", "santra", "mausambi"];
    }
    User.prototype.addFunc = function () {
    };
    return User;
}());
var usr = new User({ name: "manoj" });
