function removeWordsUntilThereIsOnlyTwo(phrase) {
  const splited = phrase.split(' ');
  while (splited.length > 2) splited.pop();
  return splited.join(' ');
}

export default removeWordsUntilThereIsOnlyTwo;
