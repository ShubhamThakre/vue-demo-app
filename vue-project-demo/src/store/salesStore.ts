import { reactive } from 'vue'

interface SalesItem {
    name: string;
    price:{},
    quantity: number;
    tags: Array<string>;
}

export interface SalesRecord {
    couponUsed: boolean,
    customer: {
        gender: string, 
        age: number, 
        email: string, 
        satisfaction: number
    },
    items: Array<SalesItem>,
    purchaseMethod: string,
    saleDate: string,
    storeLocation: string,
    _id: string
}

export const salesStore = reactive({
    salesRecords: [] as SalesRecord[],
    isLoaded: false,
    setSalesRecords(newRecords: SalesRecord[]) {
        this.salesRecords = newRecords;
    }
})