// N = 25 = 6k + 1;
import {eulerMethod} from "./EulerMethod.js";
import {sequentialDifferentiationMethod} from "./SequentialDifferentiationMethod.js";

let m = 5e-2;
let l = 8e-1;
let Y0 = 0;
let interval = [0, 1];
let h = 2e-1;

eulerMethod(m, l, Y0);
sequentialDifferentiationMethod();
