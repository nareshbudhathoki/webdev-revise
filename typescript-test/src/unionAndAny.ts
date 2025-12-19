let subs:number | string = '1M';

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

apiRequestStatus = 'success';

let airlineSeat: 'aisle' | 'window' | 'middle' = 'middle';

airlineSeat = 'window';

const orders = ['12','3','53','23'];

let currentOrder:string |undefined;

for(let order of orders){
    if(order === '12'){
        currentOrder = order;
        break;
    }
}

console.log(currentOrder);