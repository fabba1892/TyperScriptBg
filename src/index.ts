class Competition {
    // competitionName : string
    private competitors: string[] = [];
    private admin : string = "";
    constructor(
        private competitionName : string,
        private  readonly compId : number) {
    }
    addCompetition(competitor : string) {
        this.competitors.push(competitor);
    }
    competitionDetails() {
        return this.competitionName +"," + this.compId;
    }
    get competitionID() {
        return this.compId;
    }
    set competitionAdmin(adminName : string) {
        if (adminName !== "Luca") {
            this.admin = adminName;
        }
    }
}
const competition = 
    new Competition("Formula 1 2024", 44);

console.log(competition.competitionDetails());
    