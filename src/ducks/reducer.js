const initalState = {               // memory
    propertyName: '',
    address: '',
    city: '',
    state: '',
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


export default function reducer(state = initalState, action) {          //brain of the reducer
    console.log('reducer', action)
    switch (action.type) {
        case STEP_ONE:
        
        case STEP_TWO:

        case STEP_THREE:

        default:
            return state;
    }
}

export function stepone(input) {

    console.log("step one fired")
    return {
        type: STEP_ONE,
        payload: input
    }
}

export function steptwo(input) {
    console.log('step two fired');
    return {
        type: STEP_TWO,
        payload: input
    }
}

export function stepthree(input) {
    console.log('step three fired');
    return {
        type: STEP_THREE,
        payload: input
    }
}