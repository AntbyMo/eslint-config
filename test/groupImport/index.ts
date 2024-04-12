import { ref } from 'vue'

import { fun1, test1_a } from './test1'
import { test2_a, test2_b } from './test2'

const vueRef = ref(1)
console.log(test2_a, test2_b)
console.log(fun1, test1_a)

function fun(n1, n2, n3, n4, n5, n6, ...rest) {
  console.log('n1,n2,n3,n4,n5,n6', n1, n2, n3, n4, n5, n6)
}

const num = 1

if (num) {
  console.log(111)
  const a = 12
  if (a === 2) {
    const bb = 'num+1' + 'a'
  } else {
    console.log(222)
  }
}

const obj = { name: 1, name2: 2, name3: 3, name4: 4, name5: 5, name6: 6, name7: 7 }
const arr = [
  [1, 2, 3, {
    name: 1,
    nam2: 3
  }],
  [4, 5, 6],
  [7, 8, 9]
]

const testtamplate = `test${123}`
function funtest() {
  const getNum = num => {
    return num
  }
}

interface Props {
  name: string
}
