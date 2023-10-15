const obj = {a:1,b:2,c:3 , soma(){return a+b+c}}
console.log("Obj -> JSON ",JSON.stringify(obj))

console.log("JSON -> Obj ",JSON.parse('{ "a": 1,"b":2, "c":3}'))