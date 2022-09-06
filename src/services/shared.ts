export class shared {
    constructor() {

    }

    IsEmpty(value: any) {
        switch (value) {
            case "":
            case null:
            case false:
            case 0:
            case typeof value == "undefined":
                return true;
            default:
                return false;
        }
    }
}