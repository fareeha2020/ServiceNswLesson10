const readline = require('readline');
//add another import statement here
const path=require("path");
const {StudentDataReader,TeacherDataReader}=require("./DataLayer");//pulling data from these files ,which is inside this folder
const {Student,Teacher}=require("./Models");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    //telling it to run source console app
   const baseFilePath=path.join(__dirname,"../","JSONData");
   const _studentDataReader=new StudentDataReader(path.join(baseFilePath,"Students.json"));
   const _teacherDataReader=new TeacherDataReader(path.join(baseFilePath,"Teachers.json"));
   console.log(_studentDataReader.getArrayFromFile());

}

Program().then(() => {
    process.exit(0);
});