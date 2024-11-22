import { Competable } from "./iCompetable";
@HiDOM("<h2>Luca 😎🆒</h2>" , "myDiv")
export class wtLossCompetition<T> implements Competable<T> {
    competitors : T[] = [];
    admins : string = "Luca Van Wyk👑";
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
function HiDOM(msg : string, el : string) {
    //console.log("Awe" + target); 
    return function(constructor : any) {
        const docTag = document.getElementById("myDiv");
        const myCompete = new constructor();
        if (docTag)           
            docTag!.innerHTML = 
            msg + "our admin is " + myCompete.admins;
        //console.log("Awe " + msg); 
    }
}