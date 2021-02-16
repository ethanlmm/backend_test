const dateformat=require('dateformat')
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function inputParser(Prio,Para,Data){
    var date =dateformat(new Date(),"yyyy-mm-dd h:MM:ss")
    const reqID=getRandomInt(100000000)
    const str="INSERT INTO Input VALUES(\""+date+"\","+reqID+","+Prio+",\""+Para+"\",\""+Data+"\");"
    return [str,date,reqID]
}
exports.inputParser=inputParser