const sumOrReplace = (previous, next) => {
  if (previous && next) return previous + next;
  if (!previous && next) return next;
  if (previous && !next) return previous;
  return 0;
}

const getMedals = (matches) => {
  const data = matches
    .map((match) => match.node.frontmatter)
    .filter((match) => !!match.home.possession)
    .reduce(
      (res, match) => {
        if (res[match.home.team]) {
          const sumHome = res[match.home.team];
          sumHome.goals += match.home.goals ? match.home.goals : 0;
          sumHome.possession = sumOrReplace(sumHome.possession, match.home.possession);
          sumHome.shots = sumOrReplace(sumHome.shots, match.home.shots);
          sumHome.shotsIn = sumOrReplace(sumHome.shotsIn, match.home.shotsIn);
          sumHome.faults = sumOrReplace(sumHome.faults, match.home.faults);
          sumHome.offsides = sumOrReplace(sumHome.offsides, match.home.offsides);
          sumHome.corners = sumOrReplace(sumHome.corners, match.home.corners);
          sumHome.penalties = sumOrReplace(sumHome.penalties, match.home.penalties);
          sumHome.passages = sumOrReplace(sumHome.passages, match.home.passages);
          sumHome.passagesSucceded = sumOrReplace(sumHome.passagesSucceded, match.home.passagesSucceded);
          sumHome.cross = sumOrReplace(sumHome.cross, match.home.cross);
          sumHome.passagesIntercepted = sumOrReplace(sumHome.passagesIntercepted, match.home.passagesIntercepted);
          sumHome.tackels = sumOrReplace(sumHome.tackels, match.home.tackels);
          sumHome.saves = sumOrReplace(sumHome.saves, match.home.saves);
          sumHome.saves = sumOrReplace(sumHome.saves, match.home.saves);
          sumHome.scoorers = sumHome.scoorers.concat(match.home.scoorers)
          sumHome.nMatches += 1;
        } else {
          res[match.home.team] = {
            ...match.home,
            nMatches: 1,
          };
        }
        if (res[match.visitor.team]) {
          const sumVisitor = res[match.visitor.team];
          sumVisitor.goals += match.visitor.goals? match.visitor.goals : 0;
          sumVisitor.possession = sumOrReplace(sumVisitor.possession, match.visitor.possession);
          sumVisitor.possession = sumOrReplace(sumVisitor.possession, match.visitor.possession);
          sumVisitor.shots = sumOrReplace(sumVisitor.shots, match.visitor.shots);
          sumVisitor.shotsIn = sumOrReplace(sumVisitor.shotsIn, match.visitor.shotsIn);
          sumVisitor.faults = sumOrReplace(sumVisitor.faults, match.visitor.faults);
          sumVisitor.offsides = sumOrReplace(sumVisitor.offsides, match.visitor.offsides);
          sumVisitor.corners = sumOrReplace(sumVisitor.corners, match.visitor.corners);
          sumVisitor.penalties = sumOrReplace(sumVisitor.penalties, match.visitor.penalties);
          sumVisitor.passages = sumOrReplace(sumVisitor.passages, match.visitor.passages);
          sumVisitor.passagesSucceded = sumOrReplace(sumVisitor.passagesSucceded, match.visitor.passagesSucceded);
          sumVisitor.cross = sumOrReplace(sumVisitor.cross, match.visitor.cross);
          sumVisitor.passagesIntercepted = sumOrReplace(sumVisitor.passagesIntercepted, match.visitor.passagesIntercepted);
          sumVisitor.tackels = sumOrReplace(sumVisitor.tackels, match.visitor.tackels);
          sumVisitor.saves = sumOrReplace(sumVisitor.saves, match.visitor.saves);
          sumVisitor.saves = sumOrReplace(sumVisitor.saves, match.visitor.saves);
          sumVisitor.scoorers = sumVisitor.scoorers.concat(match.visitor.scoorers)
          sumVisitor.nMatches += 1;
        } else {
          res[match.visitor.team] = {
            ...match.visitor,
            nMatches: 1,
          };
        }
        return res;
      },
      {},
    );

  const averages = Object.keys(data).map((key) => {
    const team = data[key];
    return {
      team: team.team,
      goals: team.goals / team.nMatches,
      possession: team.possession / team.nMatches,
      shots: team.shots / team.nMatches,
      shotsIn: team.shotsIn / team.nMatches,
      faults: team.faults / team.nMatches,
      offsides: team.offsides / team.nMatches,
      corners: team.corners / team.nMatches,
      penalties: team.penalties / team.nMatches,
      passages: team.passages / team.nMatches,
      passagesSucceded: team.passagesSucceded / team.nMatches,
      tackels: team.tackels / team.nMatches,
      saves: team.saves / team.nMatches,
      nMatches: team.nMatches,
      scoorers: team.scoorers.reduce((res, scoorer) => {
        if (res[scoorer]) res[scoorer] += 1;
        else res[scoorer] = 1;
        return res;
      }, {}),
    }
  })
  // console.log('averages', averages);
};

export default getMedals;
