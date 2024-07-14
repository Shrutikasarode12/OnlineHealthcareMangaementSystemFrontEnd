export class Doctor
{
    doctorId:number;
    doctorName:string;
    qualification:string;
    emailId:string;
    gender:string;
    address:string;
    speciality:string;
    image:Uint8Array;

     
    constructor()
    {
        this.doctorId=0;
        this.doctorName="";
        this.qualification="";
        this.emailId="";
        this.gender="";
        this.address="";
        this.speciality="";
        this.image=new Uint8Array;



    }
}