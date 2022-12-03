function assignDoors() {
  const prizeDoor = Math.floor(Math.random() * 3);
  const contestantDoor = Math.floor(Math.random() * 3);
  const montyDoor = [0, 1, 2].find(door => door !== contestantDoor && door !== prizeDoor);

  return {
    prizeDoor: prizeDoor,
    contestantDoor: contestantDoor,
    montyDoor: montyDoor
  };
}

function playRound() {
  const doors = assignDoors();

  if (doors.contestantDoor === doors.prizeDoor) {
    return { switchWin: false }
  } else {
    return { switchWin: true }
  }
}

function simulateGames(numOfSims) {
  let switchWins = 0;
  let stayWins = 0;

  for (let i = 0; i < numOfSims; i++) {
    const result = playRound();
    if (result.switchWin) {
      switchWins++;
    } else {
      stayWins++;
    }
  }

  return {
    totalGames: switchWins + stayWins,
    switchWins: switchWins,
    stayWins: stayWins
  }
}