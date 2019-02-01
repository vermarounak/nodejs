function isNullOrEmpty(userInput){
  return (userInput === undefined || userInput === null || userInput === '');
}

module.exports = isNullOrEmpty;
