function arrayLiteral(){
    let a = [];
    console.log(a);
    
    let b = [10,12,13];
    console.log(b)
}

function arrayConstruct(){
    let a  = new Array(10,12,13);
    console.log(a);
}

function basicArray(){
    let a = ["hello","world","!"];
    
    console.log(a[0]);
    console.log(a[1]);

    let manual = a[2];
    
    console.log("third item: ", manual);

    //accessing last array elements
    let last = a[a.length-1];
    console.log("last index on array: ",last)

    //modifying the array
    console.log(a);
    a[3] = "heyyy";
    console.log("modifying the 3rd array:",a);

    //adding element to array
    a.push("wkwkwkkwkwk");
    //adding element on the first index
    a.unshift("oyyyy");

    console.log(a);

    console.log("original array: ",a);

    //pop to remove last index
    let removeLast =  a.pop();
    console.log("after remove the last index: ",a)

    //shift to remove the first index
    let removeFirst = a.shift();
    console.log("after remove the first index: ",a);
    
    //splice for removing in 2 index starting from index 1
    a.splice(1,2);
    console.log("after removing 2 elements from index 1: ", a)

}

arrayConstruct()
arrayLiteral()
basicArray()