// function compareNumber(a:number,b:number):number{
//     if(a>b)return -1;
//     if(a=b)return 0;
//     if(a<b)return 1;
//     return 0;
// }
// console.log(compareNumber(23,32));

// function compareString(a:string,b:string):number{
//     let str1=a.toString
//     let str2=b.toString
//     if(str1>str2)return 1;
//     if(str1=str2)return 0;
//     if(str1<str2)return -1;
//     return 0;
// }
// console.log(compareString("genet","hebi"))

// let arr =[1,2,3,4,5];
// let result =arr.reduce((pro,current)=>pro*current,1);
// let result2=arr.reduce(function(pro,current):number{return pro*current;},1)
// let result1=arr.reduce((max,current)=>Math.max(max,current),-Infinity)
// console.log(result)
// console.log(result1)
// console.log(result2)

export function firstLast(input:string[]){
    return input.map((names)=>{
        const arr=names.split(" ")

        return{
            firstName:arr[0],
            lastName:arr[1]
        }

    });
}

export function replaceEnds(arr:number[],start1:number,start2:number,end1:number,end2:number):number[]{
    let result=arr.slice();
    result.splice(0,0,start1,start2);
    result.splice(arr.length-2,0,end1,end2)
   return result;  
    
    
}




type Function =
    (i:number)=>number
export function higho(callback:Function,num:number[]):number[]{
 return num.map((i:number) => callback(i)) 
 }
export function square(i:number){
    return i*i;
}
export function absVal(i:number){
    return i<0?-i:i
}
type Session={userid:number,duration: number}
type Day={sessions:Session[],date:string}
export function calculateDailyTotalDuration(day:Day):number{
    let total=0
    for(let daily of day.sessions)
     total+=daily.duration
    return total;
}
export function calculateTotalDuration(dailyrecord:Day[]):number{
    let total=0;
    for(let days of dailyrecord )
    total+=calculateDailyTotalDuration(days)
return total;
}
export function getAllSessions(dailyRecord:Day[]):Session[]{
    let allsession :Session[]=[];
    for(let day of dailyRecord){
    allsession=allsession .concat(day.sessions)
}
return allsession;
}
export function getAllSessionsForUser(dailyRecord:Day[],userid:number):Session[]{
     return getAllSessions(dailyRecord).filter((session)=>session.userid===userid)
}

 export function getAllDurations(dailyRecord:Day[]):number[]{
    return getAllSessions(dailyRecord).map((session)=>session.duration)
 }   

