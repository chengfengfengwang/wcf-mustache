class Mustache {
  constructor(templateStr) {
    // const str = `我买了一个{{thing}}，好{{mood}}啊`
    // const str = `<ul>{{#arr}}<li>name: {{name}}, age: {{age}}</li>{{/arr}}</ul>`;
    this.templateStr = templateStr;
    this.pos = 0;
    this.tail = templateStr;
    
    const resultArr = [];
    let word;
    while(this.pos < this.templateStr.length) {
      word = this.scanUntil('{{');
      if (word) {
        resultArr.push(['text', word])
      };
      this.scan('{{');
      word = this.scanUntil('}}');
      if (word && word[0] === '#') {
        console.log('----', this.scanUntil('/arr}}'));
        // resultArr.push(['#', word.substring(1)])
      } else if (word && word[0] !== '#') {
        resultArr.push(['name', word])
      }
      this.scan('}}')
    }
    console.log(resultArr)
  }
  renderCommonStr(str) {
    const resultArr = [];
    let word;
    while(this.pos < this.templateStr.length) {
      word = this.scanUntil('{{');
      if (word) {
        resultArr.push(['text', word])
      };
      this.scan('{{');
      word = this.scanUntil('}}');
      if (word && word[0] === '#') {
        console.log('----', this.scanUntil('/arr}}'));
        // resultArr.push(['#', word.substring(1)])
      } else if (word && word[0] !== '#') {
        resultArr.push(['name', word])
      }
      this.scan('}}')
    }
  }
  renderToToken() {

  }
  scan(endTag) {
    this.pos += 2;
    this.tail = this.templateStr.substring(this.pos)
  }
  scanUntil(endTag) {
    const beginPos = this.pos;
    while(this.tail.indexOf(endTag) !== 0 && this.pos < this.templateStr.length) {
      this.pos++;
      this.tail = this.templateStr.substring(this.pos)
    };
    const result = this.templateStr.substring(beginPos, this.pos);
    // console.log(result)
    return result
  }
}
export default Mustache