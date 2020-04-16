import none from '../images/emblems/none.png';
import ajax from '../images/emblems/ajax.png';
import arsenal from '../images/emblems/arsenal.png';
import atleticoMadrid from '../images/emblems/atletico-madrid.png';
import bayerLeverkusen from '../images/emblems/bayer-leverkusen.png';
import chelsea from '../images/emblems/chelsea.png';
import everton from '../images/emblems/everton.png';
import inter from '../images/emblems/inter.png';
import lazio from '../images/emblems/lazio.png';
import manchesterUtd from '../images/emblems/manchester-utd.png';
import milan from '../images/emblems/milan.png';
import napoli from '../images/emblems/napoli.png';
import olympiqueLyonnaise from '../images/emblems/olympique-lyonnais.png';
import roma from '../images/emblems/roma.png';
import tottenham from '../images/emblems/tottenham.png';
import valencia from '../images/emblems/valencia.png';

const emblems = {
  'ajax': ajax,
  'arsenal': arsenal,
  'atletico-madrid': atleticoMadrid,
  'bayer-leverkusen': bayerLeverkusen,
  'chelsea': chelsea,
  'everton': everton,
  'inter': inter,
  'lazio': lazio,
  'manchester-utd': manchesterUtd,
  'milan': milan,
  'napoli': napoli,
  'olympique-lyonnais': olympiqueLyonnaise,
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

