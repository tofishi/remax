import {
    SET_COMPANY_LOGO,
    SET_LOAN_APP_URL,
    SET_USER_TYPE
    

} from './actions';
 const initialState = {
    companyLogo:'',
    loanAppUrl:'',
    userType:'', 
 }

 function userReducer(state = initialState, action ){
    switch (action.type){
            case SET_COMPANY_LOGO:
            return { ...state, companyLogo: action.payload};
            case SET_LOAN_APP_URL:
            return { ...state, loanAppUrl: action.payload};
            case SET_USER_TYPE:
            return { ...state, userType: action.payload};
            
              
            default:
                return state;
    }
 }

 export default userReducer