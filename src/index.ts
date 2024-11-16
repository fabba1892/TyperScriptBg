interface Competable {
    competitors : string[];
    admins : string;
    backupAdmin?: string;
    //
    addCompetitor(competitors : string) :void ;
    competitionDetails() : string;
};

class fantasyFootballCompetition implements Competable{
    competitors : string[] = [];
    admins : string = "";
    playerCap : number = 20;
    draftees : string[] = [];
    constructor(cAdmins: string) {
        this.admins = cAdmins;
    }
    addCompetitor(competitors: string): void {
    }
    competitionDetails(): string {
        return this.competitors.toString();
    }
    draftPlayer(rookie :string){
        this.draftees.push(rookie);
    }
};
      
class wtLossCompetition implements Competable {
    competitors : string[] = [];
    admins : string = "";
    backupAdmin : string = "";
    addCompetitor(competitors: string): void {
    }
    competitionDetails(): string {
        return this.competitors.toString();
    }
    setBackupAdmin(supportAdmin : string) {
        //this.backupAdmin =supportAdmin;
    }
};

