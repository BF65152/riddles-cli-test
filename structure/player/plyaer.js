

export function createPlayer(name) {
    return {
        name: name,
        times: []
    }
}


export function addSolveTime(player,seconds) {
    player.times.push(seconds)
    return player
}


export function showStats(player) {
    let totalTime = 0
     for (let index = 0; index < player.length; index++) {
        totalTime += player.times
        }
    let average = totalTime/player.length
    console.log(average, totalTime)
}










