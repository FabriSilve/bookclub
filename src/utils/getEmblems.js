import none from '../images/emblems/none.png';
import ajax from '../images/emblems/ajax.png';
import arsenal from '../images/emblems/arsenal.png';
import madrid from '../images/emblems/madrid.png';
import leverkusen from '../images/emblems/leverkusen.png';
import chelsea from '../images/emblems/chelsea.png';
import everton from '../images/emblems/everton.png';
import inter from '../images/emblems/inter.png';
import lazio from '../images/emblems/lazio.png';
import manchester from '../images/emblems/manchester.png';
import milan from '../images/emblems/milan.png';
import napoli from '../images/emblems/napoli.png';
import lyonnaise from '../images/emblems/lyonnais.png';
import roma from '../images/emblems/roma.png';
import tottenham from '../images/emblems/tottenham.png';
import valencia from '../images/emblems/valencia.png';

const emblems = {
  'ajax': ajax,
  'arsenal': arsenal,
  'madrid': madrid,
  'leverkusen': leverkusen,
  'chelsea': chelsea,
  'everton': everton,
  'inter': inter,
  'lazio': lazio,
  'manchester': manchester,
  'milan': milan,
  'napoli': napoli,
  'lyonnais': lyonnaise,
  'roma': roma,
  'tottenham': tottenham,
  'valencia': valencia,
};

const getEmblem = (team) => {
  const logo = emblems[team];
  if (logo) return logo;
  return none;
};

export default getEmblem;

