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
    set name(name){
        let regex_name = new RegExp('^[A-Z]{1}[a-z]{3,}$');
        const ok = regex_name.exec(name);

        if(ok){
            this._name = name;
        }
        else  throw 'Name format is not valid..';
        
    }
    
    toString(){
        const FORMAT = {year: 'numeric', month: 'numeric', day:'numeric'};
        const EMP_DATE = this.startDate === undefined ? "undefined":
                         this.startDate.toLocaleDateString("en-US",FORMAT);

        return "id="+ this.id + ", name="+this.name+", salary="+this.salary+", Gender="+this.gender+", StartDate="+EMP_DATE;
    }
}

try{
    let employeePayroll = new EmployeePayroll(0,"Rama",20000,"M",new Date());
    console.log(employeePayroll.toString()); 
}
catch(e){
    console.error(e);
}





