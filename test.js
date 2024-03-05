const countWordFrequency = require('./index.js');

test('sample text', () => {
    expect(countWordFrequency('tea project will go to the moon, soon !!!')).toStrictEqual({"go": 1, "moon": 1, "project": 1, "soon": 1, "tea": 1, "the": 1, "to": 1, "will": 1});
  });