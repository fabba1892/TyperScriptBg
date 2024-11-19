 export interface Competable {
    competitors : string[];
    admins : string;
    backupAdmin?: string;
    //
    addCompetitor(competitors : string) :void ;
    competitionDetails() : string;
};