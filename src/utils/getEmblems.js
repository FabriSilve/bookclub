import none from '../images/emblems/none.png';

const emblems = {
};

const getEmblem = (team) => {
  const logo = emblems[team];
  if (logo) return logo;
  return none;
};

export default getEmblem;

