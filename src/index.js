import Mustache from "./mustache";
window.Mustache = Mustache;
const str = `我买了一个{{thing}}，好{{mood}}啊`
new Mustache(str)