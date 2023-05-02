/* const scorecard = {
  team1: {
    name: "India",
    players: [
      {
        name: "Virat Kohli",
        runsScored: 56,
        ballsFaced: 38,
        fours: 7,
        sixes: 0,
        dismissals: [],
      },
      {
        name: "Rohit Sharma",
        runsScored: 63,
        ballsFaced: 45,
        fours: 8,
        sixes: 2,
        dismissals: [{ bowler: "Bumrah", dismissalType: "caught" }],
      },
      // more players
    ],
    overs: 20,
    wickets: 10,
    runs: 200,
  },
  team2: {
    name: "Australia",
    players: [
      {
        name: "Steve Smith",
        runsScored: 71,
        ballsFaced: 54,
        fours: 9,
        sixes: 1,
        dismissals: [],
      },
      {
        name: "David Warner",
        runsScored: 34,
        ballsFaced: 28,
        fours: 4,
        sixes: 0,
        dismissals: [{ bowler: "Kumar", dismissalType: "lbw" }],
      },
      // more players
    ],
    overs: 20,
    wickets: 10,
    runs: 180,
  },
};

function calculateWinningTeam(scorecard) {
  const { team1, team2 } = scorecard;
  if (team1.runs > team2.runs) {
    return team1.name;
  } else if (team2.runs > team1.runs) {
    return team2.name;
  } else {
    return "It's a tie!";
  }
}

function printScorecard(scorecard) {
  console.log(`${scorecard.team1.name} vs ${scorecard.team2.name}`);
  console.log("---");
  console.log(`${scorecard.team1.name} - ${scorecard.team1.runs}/${scorecard.team1.wickets} (${scorecard.team1.overs} overs)`);
  console.log("Player\t\t\tRuns\tBalls\t4s\t6s\tDismissal");
  scorecard.team1.players.forEach((player) => {
    console.log(
      `${player.name}\t\t\t${player.runsScored}\t${player.ballsFaced}\t${player.fours}\t${player.sixes}\t${player.dismissals.length > 0 ? player.dismissals[0].dismissalType : "not out"}`
    );
  });
  console.log("---");
  console.log(`${scorecard.team2.name} - ${scorecard.team2.runs}/${scorecard.team2.wickets} (${scorecard.team2.overs} overs)`);
  console.log("Player\t\t\tRuns\tBalls\t4s\t6s\tDismissal");
  scorecard.team2.players.forEach((player) => {
    console.log(
      `${player.name}\t\t\t${player.runsScored}\t${player.ballsFaced}\t${player.fours}\t${player.sixes}\t${player.dismissals.length > 0 ? player.dismissals[0].dismissalType : "not out"}`
    );
  });
  console.log("---");
  console.log(`Result: ${calculateWinningTeam(scorecard)}`);
}

printScorecard(scorecard);
 */

// id
// name
// totalOver
// venue
// date
// tossWinner
// tossChoice
// matchWinner

// "name": "Western Australia vs New South Wales, Final",
// "matchType": "odi",
// "status": "Western Australia won by 18 runs",
// "venue": "Junction Oval, Melbourne",
// "date": "2022-03-10",
// "tossWinner": "Western Australia",
// "tossChoice": "bat",
// "matchWinner": "Western Australia"
