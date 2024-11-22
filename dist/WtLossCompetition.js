var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let wtLossCompetition = class wtLossCompetition {
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
};
wtLossCompetition = __decorate([
    HiDOM("Luca")
], wtLossCompetition);
export { wtLossCompetition };
function HiDOM(target) {
    //console.log("Awe" + target); 
    return function () {
        console.log("Awe " + target);
    };
}
