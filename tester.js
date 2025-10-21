
import {parse} from 'mathjs'



const latexe = "x^2-2x+4";
const latex=parse(latexe).toTex();

console.log(latex)