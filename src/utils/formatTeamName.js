const formatTeamName = (team) => {
  const words = team.split('-');
  const formatted = words.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');
  return formatted;
};

export default formatTeamName;