export class Medicine{
    medicineId:number;
    medicineName:String;
    price:number;
    image:Uint8Array;
   

    constructor(){
        this.medicineId=0;
        this.medicineName=" ";
        this.price=0;
        this.image=new Uint8Array;

    }
}