const IS_ABSENT =0;
const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HRS =4;
const FULL_TIME_HRS =8;
const WAGE_PER_HRS =20;
const WORKING_DAYS_IN_MONTH = 20;
const MAX_WORKING_HRS_IN_MONTH = 160;

let checkStatus  = Math.floor(Math.random() * 10) % 2;

if(checkStatus == IS_ABSENT)
{
    console.log("Employee is Absent!!");
}
else
{
    console.log("Employee is Present!!");
}

let emphr = 0;

function retriveWorkingHrs(checkStatus)
{
    switch(checkStatus)
    {
        case IS_PART_TIME:
            return PART_TIME_HRS;
        break;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
            break;
        default:
            return 0;
    }
}

function calculateWage(emphr)
{
    checkStatus = Math.floor(Math.random() * 10) % 3;
    emphr = retriveWorkingHrs(checkStatus)
    return emphr * WAGE_PER_HRS
}
let dailyempWage = calculateWage(emphr);
console.log("Employee wage for a day is : "+dailyempWage);

for(let i = 0; i < WORKING_DAYS_IN_MONTH ; i++)
{
    emphr += retriveWorkingHrs(checkStatus) ;
}

function calculateTotalWage(emphr)
{
    // checkStatus = Math.floor(Math.random() * 10) % 3;
    // emphr = retriveWorkingHrs(checkStatus)
    return emphr * WAGE_PER_HRS
}

let empWage = calculateTotalWage(emphr);
console.log("Total Work hrs : "+emphr+"  Total Employee wage for a Month is : "+empWage);

let total_empHRs = 0;
let total_workingDays = 0;
let dailyWageArray = new Array();   

while(total_empHRs <= MAX_WORKING_HRS_IN_MONTH && total_workingDays < WORKING_DAYS_IN_MONTH)
{
    total_workingDays++;
    total_empHRs += retriveWorkingHrs(checkStatus);
    dailyWageArray.push(calculateWage(emphr))
}
empWage = calculateTotalWage(total_empHRs);
console.log("Total Working days: "+total_workingDays+"  Total working HRS :"+total_empHRs+"  Total Employee wage : "+empWage);

let totalEmpWage = 0;
function sum (empWage)
{
    totalEmpWage += empWage;
}
dailyWageArray.forEach(sum);
console.log("Total Working days: "+total_workingDays+"  Total working HRS :"+total_empHRs+"  Total Employee wage : "+totalEmpWage);

function TotalWages(totalwages,empWage)
{
    return totalwages + empWage;
}
console.log("Employee wage with reduce : "+dailyWageArray.reduce(TotalWages,0));

let dayCounter = 0;

function dayCountWithWageMapping(dailyempWage)
{
    dayCounter ++;
    return dayCounter + " = "+ dailyempWage+"\n";
}

let dayCountWithWageMappingArray = dailyWageArray.map(dayCountWithWageMapping);
console.log("Day with Wages :\n"+dayCountWithWageMappingArray);