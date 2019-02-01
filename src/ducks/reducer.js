const initalState = {               // memory
    propertyName: '',
    address: '',
    city: '',
    stateinput: '',
    zip: 0,
    imageUrl: '',
    monthlyMortgageAmount: 0,
    desiredMonthlyRent: 0,
    list: [{
        propertyName: 'Test Name',
        address: 'Test Address',
        city: 'Test City',
        state: 'Test State',
        zip: 0,
        imageUrl: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/242ce817-97a3-48fe-9acd-b1bf97930b01/09-posterization-opt.jpg',
        monthlyMortgageAmount: 100,
        desiredMonthlyRent: 200
    }, {
        propertyName: 'Test Name1',
        address: 'Test Address1',
        city: 'Test City1',
        state: 'Test State1',
        zip: 1,
        imageUrl: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/242ce817-97a3-48fe-9acd-b1bf97930b01/09-posterization-opt.jpg',
        monthlyMortgageAmount: 150,
        desiredMonthlyRent: 250
    }
    ]
}

const STEP_ONE = 'STEP_ONE';
const STEP_TWO = 'STEP_TWO';
const STEP_THREE = 'STEP_THREE';
const REMOVE_ITEM = 'REMOVE_ITEM'; 


export default function reducer(state = initalState, action) {          //brain of the reducer
    console.log('reducer', action)
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
        let newItem = {propertyName: state.propertyName,
        address: state.address,
        city: state.city,
        state: state.stateinput,
        zip: state.zip,
        imageUrl: state.imageUrl,
        monthlyMortgageAmount: state.monthlyMortgageAmount,
        desiredMonthlyRent: state.desiredMonthlyRent
        }        
        let newlist = state.list.slice();
        newlist.push(newItem);
        return{...state,list:newlist}

        case REMOVE_ITEM:
        let newList = state.list.slice();
            newList.splice(action.payload,1)
            console.log('Item deleted', newList)
            return {...state,list:newList}

        default:
            return state;
    }
}

export function stepone(infoObj) {

    console.log("step one fired", infoObj)
    return {
        type: STEP_ONE,
        payload: infoObj
    }
}

export function steptwo(imgUrl) {
    console.log('step two fired',imgUrl);
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
    console.log('remove button fired')
    return{
        type: REMOVE_ITEM,
        payload: index
    }
}