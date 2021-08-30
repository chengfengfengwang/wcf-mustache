import Mustache from "./mustache";
window.Mustache = Mustache;
// const str = `我买了一个{{thing}}，好{{mood}}啊`
// new Mustache(str)

const str = `<ul>{{#arr}}<li>name: {{name}}, age: {{age}}</li>{{/arr}}</ul>`;
new Mustache(str)