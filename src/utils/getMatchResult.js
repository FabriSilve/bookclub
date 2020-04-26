const getMatchResult = (team1, team2, matches) => {
  const goingMatch = matches
    .find(({ node: { frontmatter: { home, visitor } }}) => home.team === team1 && visitor.team === team2)
  const backMatch = matches
    .find(({ node: { frontmatter: { home, visitor } }}) => home.team === team2 && visitor.team === team1)
  return {
    going: goingMatch ? `${goingMatch.node.frontmatter.home.goals} - ${goingMatch.node.frontmatter.visitor.goals}` : '',
    back: backMatch ? `${backMatch.node.frontmatter.visitor.goals} - ${backMatch.node.frontmatter.home.goals}` : '',
  }
}

export default getMatchResult;
