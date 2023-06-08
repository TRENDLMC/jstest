class productWithCode{
    static get CODE_PREFIX(){
        return "PRODUCT-"
    }

    constructor(id){
        this.id
        this.code=productWithCode.CODE_PREFIX+id;
    }
}

const product1=new productWithCode('001');
console.log(productWithCode.CODE_PREFIX);
console.log(product1.code);