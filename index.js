// function superbowlWin(record){
// const ele = record.find(({result}) => result === "W") 
// if (!!ele) {
// return ele.year
// } else {
//     return undefined
//     }
//}




function superbowlWin(record) {
 const element = record.find(({result}) => result === "W");
 if(!!element) {
    return element.year
    } else {
    return undefined
    }
}
