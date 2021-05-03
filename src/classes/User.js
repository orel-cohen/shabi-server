const Rank = require("./Rank");
class User {

    constructor() {
        this._privateNumber = "";
        this._fullName = "";
        this._rank = Rank.SAMAL;
        this._score = 0;
        this._tags = [];
        this._duties = [];
        this._id = "";
    }
    // constructor(privateNumber, fullName, rank, score, tags, duties) {
    //     this._privateNumber = privateNumber;
    //     this._fullName = fullName;
    //     this._rank = rank;
    //     this._score = score;
    //     this._tags = tags;
    //     this._duties = duties;
    // }
    initNewUserData(privateNumber, fullName, rank, score, tags, duties) {
        this._privateNumber = privateNumber;
        this._fullName = fullName;
        this._rank = rank;
        this._score = score;
        this._tags = tags;
        this._duties = duties;
        this._id = privateNumber;
    }


    addDutyToUser(duty) {
        if ((this._duties) && (duty instanceof Duty)) {
            this._duties.push(duty)
            // TDOD send notification to the user
        }
    }


}

module.exports = User;