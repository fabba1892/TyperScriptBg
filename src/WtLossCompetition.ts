import { Competable } from "./iCompetable";

export class wtLossCompetition implements Competable {
    competitors : string[] = [];
    admins : string = "";
    backupAdmin : string = "";
    addCompetitor(competitor: string): void {
        this.competitors.push(competitor);
    }
    competitionDetails(): string {
        return this.competitors.toString();
    }
    setBackupAdmin(supportAdmin : string) {
        this.backupAdmin =supportAdmin;
    }
}