"use strict";
class wtLossCompetition {
    constructor() {
        this.competitors = [];
        this.admins = "";
        this.backupAdmin = "";
    }
    addCompetitor(competitor) {
        this.competitors.push(competitor);
    }
    competitionDetails() {
        return this.competitors.toString();
    }
    setBackupAdmin(supportAdmin) {
        this.backupAdmin = supportAdmin;
    }
}
