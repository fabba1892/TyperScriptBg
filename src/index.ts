import { wtLossCompetition } from "./WtLossCompetition.js";

const wtloss = new wtLossCompetition();
wtloss.addCompetitor("Luca Van Wyk");
wtloss.addCompetitor(1892);
console.log(wtloss.competitionDetails());
