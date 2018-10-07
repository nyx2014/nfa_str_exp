# 实验名称：NFA 对字符串的识别

李思睿

2018年9月26日

思路：按照广度优先的方法，考虑进入到每一个状态的可能的串，存储在数组中，分步求解。

算法采用JavaScript实现，nodejs环境下执行。如下给出源代码、测试用例及执行结果。

```js
// nfa.js
// author: lisirui
nfa=(inputArr)=>{
    console.log("---------------------");
    console.log("input: " + inputArr);
    arr = [inputArr];
    for(let i=0;i<inputArr.length;i++){
        arr.push(inputArr.slice(i+1))
    }
    console.log("q1:");
    console.log(arr);
    q2 = [];
    arr.forEach(ele => {
        if(ele[0]==='1')
            q2.push(ele.slice(1))
    });
    console.log("q2:");
    console.log(q2);
    q2.forEach(ele => {
        if(ele[0]==='0')
            q2.push(ele.slice(1))
    });
    console.log("q3:");
    console.log(q2);
    q4 = [];
    q2.forEach(ele => {
        if(ele[0]==='1')
            q4.push(ele.slice(1))
    })
    console.log("q4:");
    console.log(q4);
    if(q4.length>0)
        console.log("result: true");
    else
        console.log("result: false");
    console.log("---------------------");
}
["","10","01","110","101","001","1010"].forEach(_=>{nfa(_)})
```

```shell
$ node nfa.js
---------------------
input:
q1:
[ '' ]
q2:
[]
q3:
[]
q4:
[]
result: false
---------------------
---------------------
input: 10
q1:
[ '10', '0', '' ]
q2:
[ '0' ]
q3:
[ '0', '' ]
q4:
[]
result: false
---------------------
---------------------
input: 01
q1:
[ '01', '1', '' ]
q2:
[ '' ]
q3:
[ '' ]
q4:
[]
result: false
---------------------
---------------------
input: 110
q1:
[ '110', '10', '0', '' ]
q2:
[ '10', '0' ]
q3:
[ '10', '0', '' ]
q4:
[ '0' ]
result: true
---------------------
---------------------
input: 101
q1:
[ '101', '01', '1', '' ]
q2:
[ '01', '' ]
q3:
[ '01', '', '1' ]
q4:
[ '' ]
result: true
---------------------
---------------------
input: 001
q1:
[ '001', '01', '1', '' ]
q2:
[ '' ]
q3:
[ '' ]
q4:
[]
result: false
---------------------
---------------------
input: 1010
q1:
[ '1010', '010', '10', '0', '' ]
q2:
[ '010', '0' ]
q3:
[ '010', '0', '10', '' ]
q4:
[ '0' ]
result: true
---------------------
```