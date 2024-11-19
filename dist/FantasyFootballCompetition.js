"use strict";
class fantasyFootballCompetition {
    constructor(cAdmins) {
        this.competitors = [];
        this.admins = "";
        this.playerCap = 20;
        this.draftees = [];
        this.admins = cAdmins;
    }
    addCompetitor(competitor) {
    }
    competitionDetails() {
        return this.competitors.toString();
    }
    draftPlayer(rookie) {
        this.draftees.push(rookie);
    }
}
