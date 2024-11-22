 export interface Competable<T> {
    competitors : T[];
    admins : string;
    backupAdmin?: string;
    //
    addCompetitor(competitors : T) :void ;
    competitionDetails() : Array<T>;
};