const monthMap = {
  '01': 'Gennaio',
  '02': 'Febbraio',
  '03': 'Marzo',
  '04': 'Aprile',
  '05': 'Maggio',
  '06': 'Giugno',
  '07': 'Luglio',
  '08': 'Agosto',
  '09': 'Settembre',
  '10': 'Ottobre',
  '11': 'Novembre',
  '12': 'Dicembre',
}

const formatDate = (date) => {
  const items = date.toString().split('-');
  return `${items[2]} ${monthMap[items[1]]} ${items[0]}`;
};

export default formatDate;
