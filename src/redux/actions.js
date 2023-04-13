export const SET_COMPANY_LOGO = 'SET_COMPANY_LOGO';
export const SET_LOAN_APP_URL = 'SET_LOAN_APP_URL';
export const SET_USER_TYPE = 'SET_USER_TYPE';
 
export const setCompanyLogo = companyLogo => dispatch =>{
    dispatch({
        type: SET_COMPANY_LOGO,
        payload: companyLogo
    })
}  
export const setLoanAppUrl = loanAppUrl => dispatch =>{
    dispatch({
        type: SET_LOAN_APP_URL,
        payload: loanAppUrl
    })
}  
export const setUserType = userType => dispatch =>{
    dispatch({
        type: SET_USER_TYPE,
        payload: userType
    })
}  