import { riddles } from "./riddles/all-riddles.js";
import { askRiddle , measureSolveTime} from "../utilityFunction.js";
import { addSolveTime, createPlayer ,showStats } from "../player/plyaer.js";
import input from "analiza-sync";

let play = true;
while (play){
    const name = input('enter your name: ')
    const newPlayer = createPlayer(name)
    riddles.forEach(riddle => {
        const theTime = measureSolveTime(()=>askRiddle(riddle))
        addSolveTime(newPlayer,theTime)
})
    showStats(newPlayer)
;











}