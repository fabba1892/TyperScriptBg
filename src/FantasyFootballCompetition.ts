import { Competable } from "./iCompetable";

export class fantasyFootballCompetition<T> implements Competable<T> {
    competitors : T[] = [];
    admins : string = "";
    playerCap : number = 20;
    draftees : string[] = [];
    constructor(cAdmins: string) {
        this.admins = cAdmins;
    }
    addCompetitor(competitor: T): void {
    }
    competitionDetails(): Array<T> {
        return this.competitors;
    }
    draftPlayer(rookie :string){
        this.draftees.push(rookie);
    }
}