const IS_ABSENT =0;

let checkStatus  = Math.floor(Math.random() * 10) % 2;

if(checkStatus == IS_ABSENT)
{
    console.log("Employee is Absent!!");
}
else
{
    console.log("Employee is Present!!");
}

const IS_PART_TIME =1;
const IS_FULL_TIME =2;
const PART_TIME_HRS =4;
const FULL_TIME_HRS =8;
const WAGE_PER_HRS =20;
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

checkStatus = Math.floor(Math.random() * 10) % 3;
emphr = retriveWorkingHrs(checkStatus)
let empWage = emphr * WAGE_PER_HRS;
console.log("Employee wage for a day is : "+empWage);

const WORKING_DAYS_IN_MONTH = 20;

for(let i = 0; i < WORKING_DAYS_IN_MONTH ; i++)
{
    emphr += retriveWorkingHrs(checkStatus) ;
}

empWage = emphr * WAGE_PER_HRS;
console.log("Total Work hrs :"+emphr+" Total Employee wage for a Month is : "+empWage);