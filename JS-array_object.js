//1. For the given JSON iterate over all for loops(for, forin, forof,foreach) 

var student_details={
    Name:"Krishnamoorthy",
    Course:"Full stack developer",
    Batch:"FSD54WE-T",
    Language:["JavaScript","CSS","HTML"]
}

//For loop
for (let stu in student_details){
    if(student_details.Course=="UI")
    console.log("Name is wrongly insterted in this object")
    else{
        console.log("Looping (FOR)");
        console.log(student_details);
    }
}

//for in
for (let stu1 in student_details){
console.log("Looping (ForIn)");
console.log(student_details);
} 

//for of
for(let stu2 of student_details.Language){
    console.log("Looping (ForOf)");
    console.log(stu2);
}

//ForEach
student_details.Language.forEach(stu3=> {
    console.log("Looping (ForEach)");
    console.log(stu3);
});

//2.Create your own resume data in JSON format
var resume={
    Name:"C.Krishnmoorthy",
    Position:"Marketing Support",
    contact:{
        phone:"9876543210",
        email:"Email@email.com",
        Address:"Chennai"
    },
    Education:[
        tenth={
            School:"GHSS - Kovur",
            Grade:"7 CGPA",
        },
        twelth={
            school:"st thomas hr sec scholl",
            Grade:"60 Percentage"
        },
        undergraduate={
            Institution:"Apollo arts",
            grade:"80 percentage",
        },
        postgraduate={
            Institution:"Madars university",
            grade:"90 percentage"
        }
    ],
    experience:[
        {
            Postion:"Marketing support",
            Company:"Schwing stetter india pvt ltd",
            Years_worked:"2years"
        }
    ],
    skills:["Microsoft office"," System hardware", "Networking", "Salesforce", "SAP", ],
    language:["English","Tamil"],
    
}
  console.log(resume);

  