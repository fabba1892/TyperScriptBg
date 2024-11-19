import { Competable } from "./iCompetable";

export class fantasyFootballCompetition implements Competable{
    competitors : string[] = [];
    admins : string = "";
    playerCap : number = 20;
    draftees : string[] = [];
    constructor(cAdmins: string) {
        this.admins = cAdmins;
    }
    addCompetitor(competitor: string): void {
    }
    competitionDetails(): string {
        return this.competitors.toString();
    }
    draftPlayer(rookie :string){
        this.draftees.push(rookie);
    }
}