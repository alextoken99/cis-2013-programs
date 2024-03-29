//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final Homework points (0-30):"));

floatMidPts = parseFloat(prompt("Please enter Midterm Grade (0-35):"));

floatFinPts = parseFloat(prompt("Please enter Final Exam Grade (0-35):"));

floatTotalPts = floatHwPts + floatMidPts + floatFinPts;

intGradeOption = parseInt(prompt("Audit Pass/Fail (1) or Letter Grade (2)"));



if (intGradeOption===1)
{
    if(floatTotalPts >= 80)
    {
        stringFinalGrade="Pass";
    }
    if(floatTotalPts <= 79)
    {
        stringFinalGrade="Fail";
    }
}


if (intGradeOption===2)
{
    if(floatTotalPts>=90)
    {
        stringFinalGrade="A";
    }
    if(floatTotalPts>=80 && floatTotalPts<=89)
    {
        stringFinalGrade="B";
    }
    if(floatTotalPts>=70 && floatTotalPts<=79)
    {
        stringFinalGrade="C";
    }
    if(floatTotalPts>=60 && floatTotalPts<=69)
    {
        stringFinalGrade="D";
    }
    if(floatTotalPts<=59)
    {
        stringFinalGrade="F";
    }
}
alert("Your final grade is: " +stringFinalGrade);