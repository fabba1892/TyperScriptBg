import { Competable } from "./iCompetable";
@HiDOM("Luca")
export class wtLossCompetition<T> implements Competable<T> {
    competitors : T[] = [];
    admins : string = "";
    backupAdmin : string = "";
    addCompetitor(competitor: T): void {
        this.competitors.push(competitor);
    }
    competitionDetails(): Array<T> {
        return this.competitors;
    }
    setBackupAdmin(supportAdmin : string) {
        this.backupAdmin =supportAdmin;
    }
}
function HiDOM(target : string) {
    //console.log("Awe" + target); 
    return function() {
        console.log("Awe " + target); 
    }
}