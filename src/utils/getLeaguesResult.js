const getLeaguesResult = (leagues, matches) => {
  const results = leagues.map(({ node: { frontmatter: league }}) => ({
    name: league.tournament,
    start: league.dateStart,
    ladder: league.teams
      .map((team) => {
        const teamMatches = matches
          .filter(({ node: { frontmatter: match } }) => match.home.team === team || match.visitor.team === team);
        const teamResult = teamMatches.reduce((result, { node: { frontmatter: match } }) => {
          if (match.home.team === team) {
            const isWin = match.home.goals > match.visitor.goals;
            const isDraw = match.home.goals === match.visitor.goals;
            const isLost = match.home.goals < match.visitor.goals;
            let points = 0;
            if (isWin) points = 3;
            else if (isDraw) points = 1;
            return {
              team,
              points: result.points + points,
              nMatches: result.nMatches + 1,
              wins: isWin ? result.wins + 1 : result.wins,
              losts: isLost ? result.losts + 1 : result.losts,
              draws: isDraw ? result.draws + 1 : result.draws,
              gDone: result.gDone + match.home.goals,
              gReceived: result.gReceived + match.visitor.goals,
            }
          } else {
            const isWin = match.home.goals < match.visitor.goals;
            const isDraw = match.home.goals === match.visitor.goals;
            const isLost = match.home.goals > match.visitor.goals;
            let points = 0;
            if (isWin) points = 3;
            else if (isDraw) points = 1;
            return {
              team,
              points: result.points + points,
              nMatches: result.nMatches + 1,
              wins: isWin ? result.wins + 1 : result.wins,
              losts: isLost ? result.losts + 1 : result.losts,
              draws: isDraw ? result.draws + 1 : result.draws,
              gDone: result.gDone + match.visitor.goals,
              gReceived: result.gReceived + match.home.goals,
            }
          }
        }, { team, points: 0, nMatches: 0, wins: 0, losts: 0, draws: 0, gDone: 0, gReceived: 0 });
        return teamResult;
      })
      .sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.gDone !== a.gDone) return b.gDone - a.gDone;
        if (b.gReceived !== a.gReceived) return b.gReceived - a.gReceived;
        return b.nMatches - a.Matches;
      }),
  }));
  return results;
};

export default getLeaguesResult;
