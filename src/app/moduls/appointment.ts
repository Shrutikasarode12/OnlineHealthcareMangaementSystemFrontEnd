export class Appointment
{
    id:number;
    patientName:string;
    emailId:string;
    phoneNo:number;
    gender:string;
    dob:string;
    address:string;
    date:string;
    time:string;
         
    constructor()
    {
        this.id=0;
        this.patientName="";
        this.emailId="";
        this.phoneNo=0;
        this.gender="";
        this.dob="";
        this.address="";
        this.date="";
        this.time="";


    }
}