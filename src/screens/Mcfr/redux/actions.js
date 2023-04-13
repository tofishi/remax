export const SET_PURCHASE_PRICE = 'SET_PURCHASE_PRICE';
export const SET_PURCHASE_PRICE_PRE = 'SET_PURCHASE_PRICE_PRE';
export const SET_DOWN_PAYMENT_PERCENT = 'SET_DOWN_PAYMENT_PERCENT';
export const SET_INTEREST_RATE = 'SET_INTEREST_RATE';
export const SET_TERMS = 'SET_TERMS';
export const SET_DOWN_PAYMENTS = 'SET_DOWN_PAYMENTS';
export const SET_DOWN_PAYMENT_PRE = 'SET_DOWN_PAYMENT_PRE';
export const LOAN_AMOUNT = 'LOAN_AMOUNT';
export const LOAN_AMOUNT_PRE = 'LOAN_AMOUNT_PRE';
export const MONTHLY_PMI = 'MONTHLY_PMI';
export const MONTHLY_PMI_INPUT = 'MONTHLY_PMI_INPUT';
export const MONTHLY_PMI_RESULT = 'MONTHLY_PMI_RESULT';
export const OTHER_MONTHLY_PAYMENTS = 'OTHER_MONTHLY_PAYMENTS';
export const TOTAL_MONTHLY_PAYMENTS = 'TOTAL_MONTHLY_PAYMENTS';
export const ANNUAL_TAX_INPUT = 'ANNUAL_TAX_INPUT';
export const ANNUAL_TAX_OUTPUT = 'ANNUAL_TAX_OUTPUT';
export const ANNUAL_INS_INPUT = 'ANNUAL_INS_INPUT';
export const ANNUAL_INS_OUTPUT = 'ANNUAL_INS_OUTPUT';
export const ANNUAL_HOA_INPUT = 'ANNUAL_HOA_INPUT';
export const ANNUAL_HOA_OUTPUT = 'ANNUAL_HOA_OUTPUT';
export const ANNUAL_OTHER_INPUT = 'ANNUAL_OTHER_INPUT';
export const ANNUAL_OTHER_OUTPUT = 'ANNUAL_OTHER_OUTPUT';
export const ANNUAL_TAX_SIGN = 'ANNUAL_TAX_SIGN';
export const ANNUAL_INS_SIGN = 'ANNUAL_INS_SIGN';
export const ANNUAL_HOA_SIGN = 'ANNUAL_HOA_SIGN';
export const ANNUAL_OTHER_SIGN = 'ANNUAL_OTHER_SIGN';
export const FHA_MIP = 'FHA_MIP'; //FHA
export const FHA_MIP_OUTPUT = 'FHA_MIP_OUTPUT'; //FHA
export const MONTHLY_PMI_INPUT_FHA = 'MONTHLY_PMI_INPUT_FHA'; //FHA
export const MONTHLY_PMI_RESULT_FHA = 'MONTHLY_PMI_RESULT_FHA'; //FHA
export const SET_TOTAL_LOAN = 'SET_TOTAL_LOAN'; //FHA
export const MONTHLY_PMI_FHA = 'MONTHLY_PMI_FHA' //FHA
export const TOTAL_MONTHLY_PAYMENTS_FHA = 'TOTAL_MONTHLY_PAYMENTS_FHA'; //FHA
export const OTHER_MONTHLY_PAYMENTS_FHA = 'OTHER_MONTHLY_PAYMENTS_FHA'; //FHA



export const USDA_MIP = 'USDA_MIP'; //USDA
export const USDA_MIP_OUTPUT = 'USDA_MIP_OUTPUT'; //USDA
export const MONTHLY_PMI_INPUT_USDA = 'MONTHLY_PMI_INPUT_USDA'; //USDA
export const MONTHLY_PMI_RESULT_USDA = 'MONTHLY_PMI_RESULT_USDA'; //USDA
export const SET_TOTAL_LOAN_USDA = 'SET_TOTAL_LOAN_USDA'; //USDA
export const MONTHLY_PMI_USDA = 'MONTHLY_PMI_USDA' //USDA
export const TOTAL_MONTHLY_PAYMENTS_USDA = 'TOTAL_MONTHLY_PAYMENTS_USDA'; //USDA
export const OTHER_MONTHLY_PAYMENTS_USDA = 'OTHER_MONTHLY_PAYMENTS_USDA'; //USDA

export const VA_MIP = 'VA_MIP'; //VA
export const VA_MIP_OUTPUT = 'VA_MIP_OUTPUT'; //VA
export const MONTHLY_PMI_INPUT_VA = 'MONTHLY_PMI_INPUT_VA'; //VA
export const MONTHLY_PMI_RESULT_VA = 'MONTHLY_PMI_RESULT_VA'; //VA
export const SET_TOTAL_LOAN_VA = 'SET_TOTAL_LOAN_VA'; //VA
export const MONTHLY_PMI_VA = 'MONTHLY_PMI_VA' //VA
export const TOTAL_MONTHLY_PAYMENTS_VA = 'TOTAL_MONTHLY_PAYMENTS_VA'; //VA
export const OTHER_MONTHLY_PAYMENTS_VA = 'OTHER_MONTHLY_PAYMENTS_VA'; //VA


export const SET_NAME = 'SET_NAME'; //VA
export const SET_EMAIL = 'SET_EMAIL'; //VA
export const SET_PHONE = 'SET_PHONE'; //VA
export const SET_TAB_TYPE = 'SET_TAB_TYPE'; //VA


export const SET_MONTHLY_PMI_PRE = 'SET_MONTHLY_PMI_PRE'; //VA
export const SET_MONTHLY_PMI_VA_PRE = 'SET_MONTHLY_PMI_VA_PRE'; //VA
export const SET_MONTHLY_FHA_PRE = 'SET_MONTHLY_FHA_PRE'; //VA
export const SET_MONTHLY_USDA_PRE = 'SET_MONTHLY_USDA_PRE'; //VA


 

export const SET_FHA_MIP_OUTPUT_PRE = 'SET_FHA_MIP_OUTPUT_PRE'; //VA

export const SET_TOTAL_LOAN_PRE = 'SET_TOTAL_LOAN_PRE'; //VA

export const SET_VA_MIP_OUTPUT_PRE = 'SET_VA_MIP_OUTPUT_PRE'; //VA

export const SET_TOTAL_LOAN_VA_PRE = 'SET_TOTAL_LOAN_VA_PRE'; //VA

export const SET_USDA_MIP_OUTPUT_PRE = 'SET_USDA_MIP_OUTPUT_PRE'; //VA

export const SET_TOTAL_LOAN_USDA_PRE = 'SET_TOTAL_LOAN_USDA_PRE'; //VA

export const SET_PURCHASE_PRICE_PRE_DATA = 'SET_PURCHASE_PRICE_PRE_DATA'; //VA


// new 
export const SET_COMPANY_LOGO = 'SET_COMPANY_LOGO';
export const SET_LOAN_APP_URL = 'SET_LOAN_APP_URL';
export const SET_USER_TYPE = 'SET_USER_TYPE';

export const setPurchasePrice = purchasePrice => dispatch =>{
    dispatch({
        type: SET_PURCHASE_PRICE,
        payload: purchasePrice
    })
}
export const setPurchasePricePreData = purchasePricePreData => dispatch =>{
    dispatch({
        type: SET_PURCHASE_PRICE_PRE_DATA,
        payload: purchasePricePreData
    })
}
export const setPurchasePricePre = purchasePricePre => dispatch =>{
    dispatch({
        type: SET_PURCHASE_PRICE_PRE,
        payload: purchasePricePre
    })
}
export const setDownPaymentPercent = downPaymentPercent => dispatch =>{
    dispatch({
        type: SET_DOWN_PAYMENT_PERCENT,
        payload: downPaymentPercent
    })
}
export const setInterestRate = interestRate => dispatch =>{
    dispatch({
        type: SET_INTEREST_RATE,
        payload: interestRate
    })
}
export const setTerms = terms => dispatch =>{
    dispatch({
        type: SET_TERMS,
        payload: terms
    })
}
export const setDownPayment = downPayment => dispatch =>{
    dispatch({
        type: SET_DOWN_PAYMENTS,
        payload: downPayment
    })
}
export const setDownPaymentPre = downPaymentPre => dispatch =>{
    dispatch({
        type: SET_DOWN_PAYMENT_PRE,
        payload: downPaymentPre
    })
}
export const setLoanAmount = loanAmount => dispatch =>{
    dispatch({
        type: LOAN_AMOUNT,
        payload: loanAmount
    })
}
export const setLoanAmountPre = loanAmountPre => dispatch =>{
    dispatch({
        type: LOAN_AMOUNT_PRE,
        payload: loanAmountPre
    })
}
export const setMonthlyPMI = monthlyPMI => dispatch =>{
    dispatch({
        type: MONTHLY_PMI,
        payload: monthlyPMI
    })
}
export const setmonthlyPMIInput = monthlyPMIInput => dispatch =>{
    dispatch({
        type: MONTHLY_PMI_INPUT,
        payload: monthlyPMIInput
    })
}
export const setmonthlyPMIResult = monthlyPMIResult => dispatch =>{
    dispatch({
        type: MONTHLY_PMI_RESULT,
        payload: monthlyPMIResult
    })
}
export const setOtherMonthlyPayments = otherMonthlyPayments => dispatch =>{
    dispatch({
        type: OTHER_MONTHLY_PAYMENTS,
        payload: otherMonthlyPayments
    })
}
export const setTotalMonthlyPayments = totalMonthlyPayments => dispatch =>{
    dispatch({
        type: TOTAL_MONTHLY_PAYMENTS,
        payload: totalMonthlyPayments
    })
}
export const setAnnualTaxInput = annualTaxInput => dispatch =>{
    dispatch({
        type: ANNUAL_TAX_INPUT,
        payload: annualTaxInput
    })
}
export const setAnnualTaxOutput = annualTaxOutput => dispatch =>{
    dispatch({
        type: ANNUAL_TAX_OUTPUT,
        payload: annualTaxOutput
    })
}
export const setAnnualInsInput = annualInsInput => dispatch =>{
    dispatch({
        type: ANNUAL_INS_INPUT,
        payload: annualInsInput
    })
}
export const setAnnualInsOutput = annualInsOutput => dispatch =>{
    dispatch({
        type: ANNUAL_INS_OUTPUT,
        payload: annualInsOutput
    })
}
export const setAnnualHoaInput = annualHoaInput => dispatch =>{
    dispatch({
        type: ANNUAL_HOA_INPUT,
        payload: annualHoaInput
    })
}
export const setAnnualHoaOutput = annualHoaOutput => dispatch =>{
    dispatch({
        type: ANNUAL_HOA_OUTPUT,
        payload: annualHoaOutput
    })
}
export const setAnnualOtherInput = annualOtherInput => dispatch =>{
    dispatch({
        type: ANNUAL_OTHER_INPUT,
        payload: annualOtherInput
    })
}
export const setAnnualOtherOutput = annualOtherOutput => dispatch =>{
    dispatch({
        type: ANNUAL_OTHER_OUTPUT,
        payload: annualOtherOutput
    })
}
export const setAnnualTaxSign = annualTaxSign => dispatch =>{
    dispatch({
        type: ANNUAL_TAX_SIGN,
        payload: annualTaxSign
    })
}
export const setAnnualInsSign = annualInsSign => dispatch =>{
    dispatch({
        type: ANNUAL_INS_SIGN,
        payload: annualInsSign
    })
}
export const setAnnualHoaSign = annualHoaSign => dispatch =>{
    dispatch({
        type: ANNUAL_HOA_SIGN,
        payload: annualHoaSign
    })
}
export const setAnnualOtherSign = annualOtherSign => dispatch =>{
    dispatch({
        type: ANNUAL_OTHER_SIGN,
        payload: annualOtherSign
    })
}
// FHA
export const setFhaMip = fhaMip => dispatch =>{ //FHA
    dispatch({
        type: FHA_MIP,
        payload: fhaMip
    })
}
export const setFhaMipOutput = fhaMipOutput => dispatch =>{ //FHA
    dispatch({
        type: FHA_MIP_OUTPUT,
        payload: fhaMipOutput
    })
}
export const setTotalLoan = totalLoan => dispatch =>{ //FHA
    dispatch({
        type: SET_TOTAL_LOAN,
        payload: totalLoan
    })
}
export const setMonthlyPMIFHA = monthlyPMIFHA => dispatch =>{ //FHA
    dispatch({
        type: MONTHLY_PMI_FHA,
        payload: monthlyPMIFHA
    })
}
export const setOtherMonthlyPaymentsFHA = otherMonthlyPaymentsFHA => dispatch =>{ //FHA
    dispatch({
        type: OTHER_MONTHLY_PAYMENTS_FHA,
        payload: otherMonthlyPaymentsFHA
    })
}
export const setTotalMonthlyPaymentsFHA = totalMonthlyPaymentsFHA => dispatch =>{ //FHA
    dispatch({
        type: TOTAL_MONTHLY_PAYMENTS_FHA,
        payload: totalMonthlyPaymentsFHA
    })
}
// FHA AREA

export const setmonthlyPMIInputFHA = monthlyPMIInputFHA => dispatch =>{ //FHA
    dispatch({
        type: MONTHLY_PMI_INPUT_FHA,
        payload: monthlyPMIInputFHA
    })
}
export const setmonthlyPMIResultFHA = monthlyPMIResultFHA => dispatch =>{ //FHA
    dispatch({
        type: MONTHLY_PMI_RESULT_FHA,
        payload: monthlyPMIResultFHA
    })
}

// USDA
export const setUSDAMip = USDAMip => dispatch =>{ //USDA
    dispatch({
        type: USDA_MIP,
        payload: USDAMip
    })
}
export const setUSDAMipOutput = USDAMipOutput => dispatch =>{ //USDA
    dispatch({
        type: USDA_MIP_OUTPUT,
        payload: USDAMipOutput
    })
}
export const setTotalLoanUSDA = totalLoanUSDA => dispatch =>{ //USDA
    dispatch({
        type: SET_TOTAL_LOAN_USDA,
        payload: totalLoanUSDA
    })
}
export const setMonthlyPMIUSDA = monthlyPMIUSDA => dispatch =>{ //USDA
    dispatch({
        type: MONTHLY_PMI_USDA,
        payload: monthlyPMIUSDA
    })
}
export const setOtherMonthlyPaymentsUSDA = otherMonthlyPaymentsUSDA => dispatch =>{ //USDA
    dispatch({
        type: OTHER_MONTHLY_PAYMENTS_USDA,
        payload: otherMonthlyPaymentsUSDA
    })
}
export const setTotalMonthlyPaymentsUSDA = totalMonthlyPaymentsUSDA => dispatch =>{ //USDA
    dispatch({
        type: TOTAL_MONTHLY_PAYMENTS_USDA,
        payload: totalMonthlyPaymentsUSDA
    })
}


export const setmonthlyPMIInputUSDA = monthlyPMIInputUSDA => dispatch =>{ //USDA
    dispatch({
        type: MONTHLY_PMI_INPUT_USDA,
        payload: monthlyPMIInputUSDA
    })
}
export const setmonthlyPMIResultUSDA = monthlyPMIResultUSDA => dispatch =>{ //USDA
    dispatch({
        type: MONTHLY_PMI_RESULT_USDA,
        payload: monthlyPMIResultUSDA
    })
}

// VA START

// VA
export const setVAMip = VAMip => dispatch =>{ //VA
    dispatch({
        type: VA_MIP,
        payload: VAMip
    })
}
export const setVAMipOutput = VAMipOutput => dispatch =>{ //VA
    dispatch({
        type: VA_MIP_OUTPUT,
        payload: VAMipOutput
    })
}
export const setTotalLoanVA = totalLoanVA => dispatch =>{ //VA
    dispatch({
        type: SET_TOTAL_LOAN_VA,
        payload: totalLoanVA
    })
}
export const setMonthlyPMIVA = monthlyPMIVA => dispatch =>{ //VA
    dispatch({
        type: MONTHLY_PMI_VA,
        payload: monthlyPMIVA
    })
}
export const setOtherMonthlyPaymentsVA = otherMonthlyPaymentsVA => dispatch =>{ //VA
    dispatch({
        type: OTHER_MONTHLY_PAYMENTS_VA,
        payload: otherMonthlyPaymentsVA
    })
}
export const setTotalMonthlyPaymentsVA = totalMonthlyPaymentsVA => dispatch =>{ //VA
    dispatch({
        type: TOTAL_MONTHLY_PAYMENTS_VA,
        payload: totalMonthlyPaymentsVA
    })
}


export const setmonthlyPMIInputVA = monthlyPMIInputVA => dispatch =>{ //VA
    dispatch({
        type: MONTHLY_PMI_INPUT_VA,
        payload: monthlyPMIInputVA
    })
}
export const setmonthlyPMIResultVA = monthlyPMIResultVA => dispatch =>{ //VA
    dispatch({
        type: MONTHLY_PMI_RESULT_VA,
        payload: monthlyPMIResultVA
    })
}


export const setName = name => dispatch =>{ //VA
    dispatch({
        type: SET_NAME,
        payload: name
    })
}

export const setEmail = email => dispatch =>{ //VA
    dispatch({
        type: SET_EMAIL,
        payload: email
    })
}

export const setPhone = phone => dispatch =>{ //VA
    dispatch({
        type: SET_PHONE,
        payload: phone
    })
}

export const setTabTypes  = tabTypes => dispatch =>{ //VA
    dispatch({
        type: SET_TAB_TYPE,
        payload: tabTypes
    })
}


export const setMonthlyPMIPre  = monthlyPMIPre => dispatch =>{ //VA
    dispatch({
        type: SET_MONTHLY_PMI_PRE,
        payload: monthlyPMIPre
    })
}
export const setMonthlyPMIVAPre  = monthlyPMIVAPre => dispatch =>{ //VA
    dispatch({
        type: SET_MONTHLY_PMI_VA_PRE,
        payload: monthlyPMIVAPre
    })
}
export const setMonthlyPMIFHAPre  = monthlyPMIFHAPre => dispatch =>{ //VA
    dispatch({
        type: SET_MONTHLY_FHA_PRE,
        payload: monthlyPMIFHAPre
    })
}
export const setMonthlyPMIUSDAPre  = monthlyPMIUSDAPre => dispatch =>{ //VA
    dispatch({
        type: SET_MONTHLY_USDA_PRE,
        payload: monthlyPMIUSDAPre
    })
}


 
export const setfhaMipOutputPre  = fhaMipOutputPre => dispatch =>{ //VA
    dispatch({
        type: SET_FHA_MIP_OUTPUT_PRE,
        payload: fhaMipOutputPre
    }) 
}

export const settotalLoanPre  = totalLoanPre => dispatch =>{ //VA
    dispatch({
        type: SET_TOTAL_LOAN_PRE,
        payload: totalLoanPre
    })
}

export const setVAMipOutputPre  = VAMipOutputPre => dispatch =>{ //VA
    dispatch({
        type: SET_VA_MIP_OUTPUT_PRE,
        payload: VAMipOutputPre
    })
}
 
 
 

export const settotalLoanVAPre  = totalLoanVAPre => dispatch =>{ //VA
    dispatch({
        type: SET_TOTAL_LOAN_VA_PRE,
        payload: totalLoanVAPre
    })
}

export const setUSDAMipOutputPre  = USDAMipOutputPre => dispatch =>{ //VA
    dispatch({
        type: SET_USDA_MIP_OUTPUT_PRE,
        payload: USDAMipOutputPre
    })
}

export const settotalLoanUSDAPre  = totalLoanUSDAPre => dispatch =>{ //VA
    dispatch({
        type: SET_TOTAL_LOAN_USDA_PRE,
        payload: totalLoanUSDAPre
    })
}



// new 

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