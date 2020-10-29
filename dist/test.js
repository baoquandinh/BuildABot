"use strict";
// interface Channel {
//     type: string;
//     myString();
// }
class Channel {
    myString() {
        return 'text';
    }
}
class TextChannel extends Channel {
    constructor() {
        super(...arguments);
        this.type = 'text';
    }
}
const aTest = new TextChannel();
aTest.myString();
