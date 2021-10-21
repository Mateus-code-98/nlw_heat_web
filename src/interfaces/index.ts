export interface ClientProps{
    id?:string;
    name:string;
    cpf:string;
    birth:Date;
    phone:string;
    surname:string;
    createdAt?:Date;
    updatedAt?:Date;
}

export interface ProductProps{
    id?:string;
    name:string;
    value:string;
    categoryId:string;
    category?:CategoryProps;
    createdAt?:Date;
    updatedAt?:Date;
}

export interface CategoryProps{
    id?:string;
    name:string;
    createdAt?:Date;
    updatedAt?:Date;
}

export interface ProductSaleProps{
    id?:string;
    product:ProductProps;
    valueUnity:string;
    qnt:number;
    saleId?:string;
}

export interface SaleProps{
    id?:string;
    description:string;
    methodPaid?:string;
    datePaid?:any;
    value?:string;
    clientId?:string;
    client:ClientProps;
    shoppingCart:ProductSaleProps[];
    createdAt:Date;
    updatedAt?:Date;
}

export interface ToastMessageProps{
    id:string;
    title:string;
    description:string;
    icon:'alert' | 'info' | 'sales' | 'expenses' | 'categories' | 'products' | 'clients' | 'departments';
    type:'success' | 'info' | 'error';
}

export interface DepartmentProps{
    id:string;
    name:string;
}

export interface ExpenseProps{
    id:string;
    value:number;
    methodPaid:string;
    datePaid:Date;
    expiration:Date;
    description:string;
    departmentId:string;
    department:DepartmentProps;
}

export interface DataGraphGeneralProps{
    name:string;
    datasets:number[];
    total:number;
}

export interface InfoGraphGeneralProps{
    labels:string[];
    data:DataGraphGeneralProps[];
}

export interface DataGraphCategoriesProps{
    name:string;
    datasets:number[];
}

export interface InfoGraphCategoriesProps{
    labels:string[];
    data:DataGraphCategoriesProps[];
}

export interface InfoDayProps{
    sales:number;
    expenses:number;
    future:{
        sales:number;
        expenses:number;
    };
    medias:{
        sales:number;
        expenses:number;
    };
}