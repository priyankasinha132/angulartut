interface UserModel {
    name: string;
}
class User {
    public name: string; // boolean | number | any | Object | null | undefined
    protected lastname: UserModel;
    protected fruits = []; // <any>;
    /**
     *
     * @param name :userModel
     */
    constructor(name: UserModel) { // its optional paramater
        this.lastname = name;
        this.name = "";
        this.fruits = ["apple", "santra", "mausambi"];
    }
    private addFunc(): void {

    }
}
let usr = new User({ name: "manoj" });
