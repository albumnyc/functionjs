
export enum Validation {
    DEFAULT = 0,
    SUCCESS = 1,
    FAIL = 2,
}

interface Widget<T> {
    value: T;
    valadation : Validation;
}


class A {
    public name : Widget<string> ={
        valadation: Validation.DEFAULT,
        value: '1',
    }
    readonly pi : Widget<string> ={
        valadation: Validation.DEFAULT,
        value: '1',
    }
    public age: Widget<(()=>number)|void> = {
        valadation: Validation.DEFAULT,
        value: (value:number=1)=>{console.log({value}); return 1;},
    }
    public ret<T> ({key,value}:{key?:string,value:T}) {
        return {
            value,
        }
    }
}


const a = new A();
a.ret({value:()=>{1}});



const func = (a:string,b?:number): string =>{return a+b;} 
console.log(func('2'));





interface MayBe {
    a?:number;
    b: string;
    m?:string;
}

interface MayBe1 extends MayBe{
    c: void|Boolean;   
}

const objMay :MayBe1={
    a:1,
    b:'w',
    c: undefined,
}

type arraytype = Array<MayBe>;
const arr :arraytype = [{a:1,b:'sda'}];





enum obj2 {
    a =1,
    b =2,
}


console.log(obj2.a);