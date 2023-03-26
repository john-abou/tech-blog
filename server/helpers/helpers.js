const dayjs = require('dayjs');

module.exports = {
  // The custom helper 'format_date' takes in a timestamp
  format_date: (date) => {
    return dayjs(date).format('DD/MM/YYYY HH:mm:ss');
  }
};
