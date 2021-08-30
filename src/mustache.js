class Mustache {
  constructor(templateStr) {
    // const str = `我买了一个{{thing}}，好{{mood}}啊`
    this.templateStr = templateStr;
    this.pos = 0;
    this.tail = templateStr;
    // this.scanUntil('{{');
    // this.scan('{{')
    // this.scanUntil('}}');
    // this.scan('}}')
    // this.scanUntil('{{');
    // this.scan('{{')
    // this.scanUntil('}}');
    // this.scan('}}')
    while(this.pos < this.templateStr.length) {
      this.scanUntil('{{');
      this.scan('{{')
      this.scanUntil('}}');
      this.scan('}}')
    }
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
    console.log(result)
  }
}
export default Mustache