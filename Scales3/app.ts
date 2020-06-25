interface IStorageEngine {
    addItem(item:Product): void;
    getItem(index:number): Product;
    getCount(): number;
}

class Product {
    
    private name: string
    private weight: number

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

class Scales <StorageEngine extends  IStorageEngine>{           

    product : StorageEngine;

    constructor (_product:StorageEngine){
        this.product=_product        
    }
  
    addScaleItem(_product:Product): void{
        this.product.addItem(_product)  
    } 

    getSumScale ():number {
        let sumWeight:number=0
        for (let i=0; i<this.product.getCount(); i++){
            sumWeight+=this.product.getItem(i).getScale()
        }
        return sumWeight    
     }

     getNameList ():Array<string> {
        let nameList:Array<string>=[]
        for (let i=0; i<this.product.getCount(); i++){
            nameList.push(this.product.getItem(i).getName())
        }      
        return nameList
    }
    
}




class ScalesStorageEngineArray implements IStorageEngine{

    product: Array<Product> = []

    addItem(item: Product): void {
        this.product.push(item)
    }

    getItem(index: number): Product{
        return this.product[index]       
    }

    getCount():number{
       return this.product.length
    }
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {
    
    storageKey: string="products"
    
    addItem(item:Product): void{

        let prod:Array<any>

        if (!localStorage.products){
            prod=[]            
        }
        else {
            prod=JSON.parse(localStorage.products)            
        }
        prod.push (item)
        localStorage.products=JSON.stringify(prod)
    }

     getItem(index:number): Product{
         let pp=JSON.parse(localStorage.products)
         let newProduct:Product=new Product(pp[index].name, pp[index].weight)
         return newProduct    
         
    }
     getCount(): number {
       return JSON.parse(localStorage.products).length
    }

}

 

let app1:Product=new Product ('apple1',1)
let app2:Product=new Product ('apple2',2)
let tom1:Product=new Product ('tomato1',2)
let tom2:Product=new Product ('tomato2',4)

let scalesArr:ScalesStorageEngineArray=new ScalesStorageEngineArray();
let scales1:Scales<ScalesStorageEngineArray>=new Scales (scalesArr);

scalesArr.addItem(app1)
scalesArr.addItem(app2)
scalesArr.addItem(tom1)
scalesArr.addItem(tom2)

console.log (scales1.getSumScale())
console.log (scales1.getNameList())

let scalesLocalStorage:ScalesStorageEngineLocalStorage= new ScalesStorageEngineLocalStorage();
let scales2:Scales<ScalesStorageEngineLocalStorage>=new Scales (scalesLocalStorage);

scalesLocalStorage.addItem(app1)
scalesLocalStorage.addItem(app2)
scalesLocalStorage.addItem(tom1)
scalesLocalStorage.addItem(tom2)

console.log (scales2.getSumScale())
console.log (scales2.getNameList())
