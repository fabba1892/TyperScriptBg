import { Competable } from "./iCompetable";

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