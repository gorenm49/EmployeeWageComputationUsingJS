class EmployeePayroll
{
    id;
    salary;
    gender;
    startDate;

    constructor(...params)
    {
        this.id  = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name(){return this._name;}
    set name(name){this._name = name;}

    toString(){
        const FORMAT = {year: 'numeric', month: 'numeric', day:'numeric'};
        const EMP_DATE = this.startDate === undefined ? "undefined":
                         this.startDate.toLocaleDateString("en-US",FORMAT);

        return "id="+ this.id + ", name="+this.name+", salary="+this.salary+", Gender="+this.gender+", StartDate="+EMP_DATE;
    }
}

let employeePayroll = new EmployeePayroll(1,"Abhijeet",20000,"M",new Date());
console.log(employeePayroll.toString());


