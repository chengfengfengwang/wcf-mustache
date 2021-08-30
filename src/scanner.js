

function beginScan(str) {
  let pos = 0, resultArr = [], tail = str;
  function scan(endTag) {
    pos += 2;
    tail = this.str.substring(pos)
  }
  function scanUntil(endTag) {
    const beginPos = pos;
    while (tail.indexOf(endTag) !== 0 && pos < this.str.length) {
      pos++;
      tail = this.str.substring(pos)
    };
    const result = this.str.substring(beginPos, pos);
    // console.log(result)
    return result
  }
  while (pos < str.length) {
    word = this.scanUntil('{{');
    if (word) {
      resultArr.push(['text', word])
    };
    this.scan('{{');
    word = this.scanUntil('}}');
    if (word && word[0] === '#') {
      // console.log('----', this.scanUntil('/arr}}'));
      resultArr.push(['#', word.substring(1)])
    } else if (word && word[0] !== '#') {
      resultArr.push(['name', word])
    }
    this.scan('}}')
  }
  return resultArr
}

const template = `我买了一个{{thing}}，好{{mood}}啊`