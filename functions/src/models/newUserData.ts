class newUserData {

    ref: string = "123";
    first: string = "";
    last: string = "";
    born: string = "";
    dead: string = "";
    age: string = "";
    gender: string = "";

    private _temp: string = "456";

    get temp(): string {
        return this._temp;
    }
    set temp(value: string) {
        this._temp = value;
    }



}