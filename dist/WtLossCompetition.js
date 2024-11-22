export class wtLossCompetition {
    constructor() {
        this.competitors = [];
        this.admins = "";
        this.backupAdmin = "";
    }
    addCompetitor(competitor) {
        this.competitors.push(competitor);
    }
    competitionDetails() {
        return this.competitors;
    }
    setBackupAdmin(supportAdmin) {
        this.backupAdmin = supportAdmin;
    }
}
