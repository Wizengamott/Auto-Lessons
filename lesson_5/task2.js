let averageGrade = 85;
switch (true) {
    case (averageGrade > 90 && averageGrade <= 100):
        console.log("Perfecto!");
        break;
    case (averageGrade >= 81 && averageGrade <= 90):
        console.log("Cool guy!");
        break;
    case (averageGrade >= 71 && averageGrade <= 80):
        console.log("Chill guy!");
        break;
    case (averageGrade >= 60 && averageGrade <= 70):    
        console.log("You can do better!");
        break;
    case (averageGrade < 60):
        console.log("You need to work harder!");
        break;
    default:
        console.log("Invalid grade!");
        break;
}