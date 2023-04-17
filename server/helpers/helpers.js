const dayjs = require('dayjs');

module.exports = {
  // The custom helper 'format_date' takes in a timestamp
  format_date: (date) => {
    return dayjs(date).format('DD/MM/YYYY HH:mm:ss');
  },
  truncate: (str, len) => {
    if (str.length > len && str.length > 0) {
      let new_str = str + " "; // Make sure string has a space after it
      new_str = str.substr(0, len); // Get the substring of the length provided
      new_str = str.substr(0, new_str.lastIndexOf(" ")); // Get the last index of the space within the substring
      new_str = (new_str.length > 0) ? new_str : str.substr(0, len); // Make sure the string is not empty 
      return new_str + '...'; // Add the ellipses  
    }
    return str; // Return the string as is if it is less than the length
  },
};
