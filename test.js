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