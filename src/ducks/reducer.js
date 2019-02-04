const initalState = {               // memory
    propertyName: '',
    address: '',
    city: '',
    stateinput: '',
    zip: 0,
    imageUrl: '',
    monthlyMortgageAmount: 0,
    desiredMonthlyRent: 0,
    list: [],
    item:{}
}

const STEP_ONE = 'STEP_ONE';
const STEP_TWO = 'STEP_TWO';
const STEP_THREE = 'STEP_THREE';
const REMOVE_ITEM = 'REMOVE_ITEM'; 
const GET_LIST = 'GET_LIST';


export default function reducer(state = initalState, action) {          //brain of the reducer
    console.log('state',state)
    switch (action.type) {
        case STEP_ONE:
        let {propertyName,address,city,stateinput,zip} = action.payload;
        return {...state,propertyName: propertyName,
        address: address,
        city: city,
        state: stateinput,
        zip: zip}    
        
        case STEP_TWO:
        return {...state,imageUrl:action.payload}

        case STEP_THREE:
        let {desiredMonthlyRent,monthlyMortgageAmount} = action.payload;
        state = {...state,desiredMonthlyRent:desiredMonthlyRent,monthlyMortgageAmount:monthlyMortgageAmount};
        let newItem = {propertyname: state.propertyName,
        address: state.address,
        city: state.city,
        state: state.stateinput,
        zip: state.zip,
        imageurl: state.imageUrl,
        monthlymortgageamount: state.monthlyMortgageAmount,
        desiredmonthlyrent: state.desiredMonthlyRent
        }  
        console.log(newItem);      
        return{...state,item:newItem}

        case REMOVE_ITEM:
        let newList = state.list.slice();
            newList.splice(action.payload,1)
            console.log('Item deleted', newList)
            return {...state,list:newList}
        
        case GET_LIST:
        return {...state,list:action.payload}   

        default:
            return state;
    }
    console.log('item',state.item)
}

export function stepone(infoObj) {

    // console.log("step one fired", infoObj)
    return {
        type: STEP_ONE,
        payload: infoObj
    }
}

export function steptwo(imgUrl) {
    // console.log('step two fired',imgUrl);
    return {
        type: STEP_TWO,
        payload: imgUrl
    }
}

export function stepthree(infoObj) {
    console.log('step three fired');
    return {
        type: STEP_THREE,
        payload: infoObj
    }
}

export function removeItem(index) {
    // console.log('remove button fired')
    return{
        type: REMOVE_ITEM,
        payload: index
    }
}

export function getList(arr){
    // console.log('get list fired ',arr)
    return{
        type: GET_LIST,
        payload:arr
    }
}