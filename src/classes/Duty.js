class Duty {

    constructor() {
        this._startDate = new Date();
        this._endDate = new Date();
        this._user = [];
        this._score = 0;
        this._tags = [];  
    }


    constructor(startDate, endDate, user, score, tags) {
        this._startDate = startDate;
        this._endDate = endDate;
        this._user = user;
        this._score = score;
        this._tags = tags;  
    }
}