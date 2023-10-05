import { ref } from 'vue'

import { fun1, test1_a } from './test1'
import { test2_a, test2_b } from './test2'

const vueRef = ref(1)
console.log(fun1, test1_a)
console.log(test2_a, test2_b)
