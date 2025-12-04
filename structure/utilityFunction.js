import input from "analiza-sync";
import r1 from "./riddle-game/riddles/r1.js";

export function askRiddle(riddleObj) {
    let answer = true;
    console.log(`the name of riddle:  ${riddleObj.name}!! the riddle is:  ${riddleObj.taskDescription}`);
    while (answer == true){
    const theAnswer = input('enter the answer: ')    
    if (theAnswer == riddleObj.correctAnswer) {
        console.log('Well done Anat correct answer');
        answer = false;
        }
    else{
        console.log('Incorrect answer will be answered again');
    }
}}


export function measureSolveTime(fn) {
    const beforDate = new Date().getTime()/1000
    fn()
    const afterDate = new Date().getTime()/1000
    const totalTime = afterDate - beforDate
    return totalTime

}




