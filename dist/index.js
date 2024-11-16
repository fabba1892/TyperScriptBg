"use strict";
class Competition {
    constructor(competitionName, compId) {
        this.competitionName = competitionName;
        this.compId = compId;
        // competitionName : string
        this.competitors = [];
    }
    addCompetition(competitor) {
        this.competitors.push(competitor);
    }
    competitionDetails() {
        return this.competitionName + "," + this.compId;
    }
}
const competition = new Competition("Formula 1 2024", 44);
