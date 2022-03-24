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
    return emphr * WAGE_PER_HRS
}

let empWage = calculateTotalWage(emphr);
console.log("Total Work hrs : "+emphr+"  Total Employee wage for a Month is : "+empWage);

let total_empHRs = 0;
let total_workingDays = 0;
let dailyWageArray = new Array(); 
let dailyWageMap = new Map();
let dailyHrsMap = new Map();
let dailyWageAndHrsArray = new Array(); 

// while(total_empHRs <= MAX_WORKING_HRS_IN_MONTH && total_workingDays < WORKING_DAYS_IN_MONTH)
// {
//     total_workingDays++;
//     total_empHRs += retriveWorkingHrs(checkStatus);
//     dailyWageArray.push(calculateWage(emphr));
//     dailyWageMap.set(total_workingDays,calculateWage(emphr));
//     dailyHrsMap.set(total_workingDays,retriveWorkingHrs(checkStatus));
// }


while(total_empHRs <= MAX_WORKING_HRS_IN_MONTH && total_workingDays < WORKING_DAYS_IN_MONTH)
{
    total_workingDays++;
    total_empHRs += retriveWorkingHrs(checkStatus);
    dailyWageArray.push(calculateWage(emphr));
    dailyWageAndHrsArray.push({
                    dayNum:total_workingDays,
                    dailyHrs:emphr,
                    dailyWage: calculateWage(emphr),
                    toString(){
                        return '\nDay '+this.dayNum+' =>Working Hrs is  '+this.dailyHrs+'  daily wage '+this.dailyWage
                    }
                });
    dailyWageMap.set(total_workingDays,calculateWage(emphr));
    dailyHrsMap.set(total_workingDays,retriveWorkingHrs(checkStatus));
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

function retriveAllFullTimeWageRecords(dailyempWage)
{
    return dailyempWage.includes("160");
}

let fullDayWageArray = dayCountWithWageMappingArray.filter(retriveAllFullTimeWageRecords);
console.log("filtered result for full time wage 160 earned by EMployee:\n"+fullDayWageArray);

console.log("filtered first result for full time wage 160 earned by EMployee:\n"+dayCountWithWageMappingArray.find(retriveAllFullTimeWageRecords));

function checkContainsFullTime(dailyempWage)
{
    return dailyempWage.includes("160");
}

console.log("All elements having full time wage: "+fullDayWageArray.every(checkContainsFullTime));

function isPartTimeWage(dailyempWage)
{
    return dailyempWage.includes("80");
}

console.log("result for Part time wage : "+dayCountWithWageMappingArray.some(isPartTimeWage));

function employeesTotalWorkingDays(workingDays,dailyempWage)
{
    if(dailyempWage >0)
    {
        workingDays++;
    }
    return workingDays;
}

console.log("Number of days Employee worked: "+dailyWageArray.reduce(employeesTotalWorkingDays,0));
console.log(dailyWageMap);
console.log("Employee wage using Map :"+Array.from(dailyWageMap.values()).reduce(TotalWages,0));

const findTotal  = (totalVal, dailyVal) => {
    return totalVal+ dailyVal;
}
let totalHrs = Array.from(dailyHrsMap.values()).filter(emphr=> emphr>0).reduce(findTotal,0);
let totalSalary = dailyWageArray.filter(totalEmpWage => totalEmpWage>0).reduce(findTotal,0);
console.log("Employee wage with Arrow :"+" Total Hrs: "+totalHrs+ " Total Wages: "+totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

dailyHrsMap.forEach((value, key, map) => {
    if(value == 8) fullWorkingDays.push(key);
    else if(value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("Full working days: "+fullWorkingDays);
console.log("Part working days: "+partWorkingDays);
console.log("Non working days: "+nonWorkingDays);

console.log(" Representation of Daily worked hr and Daily Wage Earned: "+dailyWageAndHrsArray);



