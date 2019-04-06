export interface User {
    name: string;
    age: number;
    newVal?: any;
}


export class UserClass {
    public name: string;
    public age: number;
    constructor(x: string, y?: number) {
        this.name = x;
        this.age = y;
    }
}

// Is equal to above class
export class UserClassShortcut {
    constructor(public name: string, public age?: number) {
    }
}
