const getMatchResult = (team1, team2, matches) => {
  const match = matches
    .find(({ node: { frontmatter: { home, visitor } }}) => home.team === team1 && visitor.team === team2)
  if (!match) return '';
  console.log(match)
  return `${match.node.frontmatter.home.goals} - ${match.node.frontmatter.visitor.goals}`;
}

export default getMatchResult;
