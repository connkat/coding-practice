// 2 teams: home/away winner/loser 3=win 0 = lose
// min 2 teams, one will always win, everyone plays other teams.
// array of pairs (teams)--[homeTeam, awayTeam]
// array of of results--results[i] = winner of competitions[i]
// if results = 1 // home team win
// if results = 0 // away team win

// let competitions = [
//   ["Boston", "Toronto"],
//   ["NYC", "Toronto"],
//   ["Boston", "NYC"],
// ];
// let results = [0, 0, 1];
//TORONTO

// let competitions = [["Bulls", "Eagles"]];
// let results = [1];
//BULLS

competitions = [
  ["Bulls", "Eagles"],
  ["Bulls", "Bears"],
  ["Bears", "Eagles"],
];
results = [0, 0, 0];
//EAGLES

function tournamentWinner(competitions, results) {
    let resObj = {}
	competitions.forEach((cv, individual) => {
		const winner = cv[!results[individual] ? 1 : 0]
		if(resObj[winner]){
			resObj[winner] = resObj[winner] + 3;
		}else{
			resObj[winner] = 3
		}
	})
	return Object.keys(resObj).reduce((a, b) => resObj[a] > resObj[b] ? a : b);
}

console.log(tournamentWinner(competitions, results));
