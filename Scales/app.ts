class Scales {    

    products: Array<Product>

    constructor (){
        this.products=[]  
    }
   
    add (_product:Product):void {
        this.products.push (_product)
    }
    getSumScale ():number {
        let sumWeight:number=0
        this.products.forEach ((i:Product)=> {sumWeight=sumWeight+i.getScale()})
        return sumWeight       
     }

    getNameList ():Array<string> {
        let nameList:Array<string>=[]
        this.products.forEach ((i:Product)=> {nameList.push(i.getName())})      
        return nameList
    }
 }

class Product {
    
    name: string
    weight: number

    constructor(_name:string, _weight:number) {            
        this.name=_name;
        this.weight=_weight;
    }

    getScale (): number {
       return this.weight
    }

    getName (): string {
        return this.name
    }     
}

class Apple extends Product {    
    
    constructor(_name:string, _weight:number) {
        super(_name, _weight)        
    }
}
class Tomato extends Product {    
    
    constructor(_name:string, _weight:number) {
        super(_name, _weight)        
    }
}

let scales1:Scales=new Scales;

let app1:Apple=new Apple ('apple1',1)
let app2:Apple=new Apple ('apple2',2)
let app3:Apple=new Apple ('apple3',3)
let tom1:Tomato=new Tomato ('tomato1',2)
let tom2:Tomato=new Tomato ('tomato2',4)

scales1.add (app1)
scales1.add (app2)
scales1.add (app3)
scales1.add (tom1)
scales1.add (tom2)

console.log (scales1.getSumScale ())
console.log (scales1.getNameList ())
