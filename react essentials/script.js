// spread operator in arrays
    // var arr = [1,2,3,4]
    // var copy = [...arr]
    // copy.pop();
    // console.log(arr,copy)
// -------------------------------------------------------------------------------------------------------
// spread operator in objects
    // var state = {name:"roshan",age:20}
    // var copy = {...state}
    // copy.name="roshini"
    // console.log(state,copy)
// --------------------------------------------------------------------------------------------------------
// Destructuring
    // var obj = { name:"roshan", age:20, mailid:"roshanjhajha76@gmail.com"}
    // const {mailid} = obj;
    // console.log(mailid);

    // var obj = { name:"roshan", social:{facebook:{first:"account1", sec:"account2"}}}
    // const {sec} =obj.social.facebook
    // console.log(sec);


    // var arr = ["roshan",12,function(){}];
    // var [first,sec,third] = arr;
    // console.log(third)
// --------------------------------------------------------------------------------------------------------
// arrow functions
    // var abcd = (a,b)=>{
    //     console.log(a+b);
    // }
    // abcd(12,10)
// -------------------------------------------------------------------------------------------------------------
// map
    // var arr =[1,2,3,4]
    // var ans= arr.map(elem => elem+2)
    // console.log(ans)

    // var arr =[1,2,3,4]
    // var ans= arr.map(elem => elem>2 ? elem+1 :elem)
    // console.log(ans)
// ---------------------------------------------------------------------------------------------------------
// filter
    // var arr = [1,2,3,4,5,6];
    // const ans = arr.filter(elem => elem>=5)   the value should return either true or false
    // console.log(ans)


    // var arr = [
    //     {name:"roshan",age:20,gender:"male"},
    //     {name:"roshani",age:22,gender:"female"},
    //     {name:"roshana",age:24,gender:"female"}
    // ]
    // var ans = arr.filter(elem => elem.gender==="female")
    // console.log(ans)