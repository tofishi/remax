import {
    SET_PURCHASE_PRICE,SET_DOWN_PAYMENT_PERCENT,SET_INTEREST_RATE,
    SET_TERMS,SET_DOWN_PAYMENTS,SET_DOWN_PAYMENT_PRE,LOAN_AMOUNT,
    LOAN_AMOUNT_PRE,MONTHLY_PMI,MONTHLY_PMI_INPUT,MONTHLY_PMI_RESULT,
    OTHER_MONTHLY_PAYMENTS,TOTAL_MONTHLY_PAYMENTS,ANNUAL_TAX_INPUT,
    ANNUAL_TAX_OUTPUT,ANNUAL_INS_INPUT,ANNUAL_INS_OUTPUT,ANNUAL_HOA_INPUT,
    ANNUAL_HOA_OUTPUT,ANNUAL_OTHER_INPUT,ANNUAL_OTHER_OUTPUT,ANNUAL_TAX_SIGN,
    ANNUAL_INS_SIGN,ANNUAL_HOA_SIGN,ANNUAL_OTHER_SIGN,SET_PURCHASE_PRICE_PRE,
    FHA_MIP,FHA_MIP_OUTPUT,SET_TOTAL_LOAN,MONTHLY_PMI_FHA,MONTHLY_PMI_INPUT_FHA,
    MONTHLY_PMI_RESULT_FHA,OTHER_MONTHLY_PAYMENTS_FHA,TOTAL_MONTHLY_PAYMENTS_FHA,
    USDA_MIP,USDA_MIP_OUTPUT,SET_TOTAL_LOAN_USDA,MONTHLY_PMI_USDA,OTHER_MONTHLY_PAYMENTS_USDA,
    TOTAL_MONTHLY_PAYMENTS_USDA,MONTHLY_PMI_INPUT_USDA,MONTHLY_PMI_RESULT_USDA,
    VA_MIP,VA_MIP_OUTPUT,SET_TOTAL_LOAN_VA,MONTHLY_PMI_VA,OTHER_MONTHLY_PAYMENTS_VA,
    TOTAL_MONTHLY_PAYMENTS_VA,MONTHLY_PMI_INPUT_VA,MONTHLY_PMI_RESULT_VA,
    SET_NAME,SET_EMAIL,SET_PHONE,SET_TAB_TYPE,SET_MONTHLY_PMI_PRE,SET_MONTHLY_PMI_VA_PRE,SET_MONTHLY_FHA_PRE,SET_MONTHLY_USDA_PRE,

    SET_FHA_MIP_OUTPUT_PRE,SET_TOTAL_LOAN_PRE,SET_VA_MIP_OUTPUT_PRE,SET_TOTAL_LOAN_VA_PRE,SET_USDA_MIP_OUTPUT_PRE,SET_TOTAL_LOAN_USDA_PRE,
    SET_COMPANY_LOGO,
    SET_LOAN_APP_URL,
    SET_USER_TYPE,
    SET_PURCHASE_PRICE_PRE_DATA
    

    
    

} from './actions';
 const initialState = {
    purchasePrice:0,
    purchasePricePre:0,
    downPaymentPercent:0,
    interestRate:0,
    terms:0,
    downPayment:0,
    downPaymentPre:0,
    loanAmount:0,
    loanAmountPre:0,
    monthlyPMI:0,
    monthlyPMIInput:0,
    monthlyPMIResult:0,
    otherMonthlyPayments:0,
    totalMonthlyPayments:0,
    annualTaxInput:0,
    annualTaxOutput:0,
    annualInsInput:0,
    annualInsOutput:0,
    annualHoaInput:0,
    annualHoaOutput:0,
    annualOtherInput:0,
    annualOtherOutput:0,
    totalLoan:0, //FHA
    fhaMip:1.75, //FHA
    fhaMipOutput:0, //FHA
    monthlyPMIFHA:0, //FHA
    monthlyPMIInputFHA:0, //FHA
    monthlyPMIResultFHA:0, //FHA
    otherMonthlyPaymentsFHA:0, //FHA
    totalMonthlyPaymentsFHA:0, //FHA
    USDAMip:1.01, //USDA
    USDAMipOutput:0, //USDA
    totalLoanUSDA:0, //USDA
    monthlyPMIUSDA:0, //USDA
    otherMonthlyPaymentsUSDA:0, //USDA
    totalMonthlyPaymentsUSDA:0, //USDA
    monthlyPMIInputUSDA:0.35, //USDA
    monthlyPMIResultUSDA:0, //USDA

  VAMip:0, //VA
 VAMipOutput:0, //VA
 totalLoanVA:0, //VA
 monthlyPMIVA:0, //VA
 otherMonthlyPaymentsVA:0, //VA
 totalMonthlyPaymentsVA:0, //VA
 monthlyPMIInputVA:0, //VA
 monthlyPMIResultVA:0, //VA

 name:'', //VA
 email:'', //VA
 phone:'', //VA
 tabTypes:0,
 monthlyPMIPre:0,
 monthlyPMIVAPre:0,
 monthlyPMIFHAPre:0,
 monthlyPMIUSDAPre:0,

 fhaMipOutputPre:0,
 totalLoanPre:0,
 VAMipOutputPre:0,
 totalLoanVAPre:0,
 USDAMipOutputPre:0,
 totalLoanUSDAPre:0,


    annualTaxSign:false,
    annualInsSign:true,
    annualHoaSign:true,
    annualOtherSign:true,
    // new
    companyLogo:'',
    loanAppUrl:'',
    userType:'', 
    purchasePricePreData:'',
 }

 function userReducer(state = initialState, action ){
    switch (action.type){
            case SET_PURCHASE_PRICE:
                return { ...state, purchasePrice: action.payload};
            case SET_PURCHASE_PRICE_PRE:
                return { ...state, purchasePricePre: action.payload};
            case SET_DOWN_PAYMENT_PERCENT:
                return { ...state, downPaymentPercent: action.payload};
            case SET_INTEREST_RATE:
                return { ...state, interestRate: action.payload};
            case SET_TERMS:
                return { ...state, terms: action.payload};
            case SET_DOWN_PAYMENTS:
                return { ...state, downPayment: action.payload};
            case SET_DOWN_PAYMENT_PRE:
                return { ...state, downPaymentPre: action.payload};
            case LOAN_AMOUNT:
                return { ...state, loanAmount: action.payload};
            case LOAN_AMOUNT_PRE:
                return { ...state, loanAmountPre: action.payload};
            case MONTHLY_PMI:
                return { ...state, monthlyPMI: action.payload};
            case MONTHLY_PMI_INPUT:
                return { ...state, monthlyPMIInput: action.payload};
            case MONTHLY_PMI_RESULT:
                return { ...state, monthlyPMIResult: action.payload};
            case OTHER_MONTHLY_PAYMENTS:
                return { ...state, otherMonthlyPayments: action.payload};
            case TOTAL_MONTHLY_PAYMENTS:
                return { ...state, totalMonthlyPayments: action.payload};
            case ANNUAL_TAX_INPUT:
                return { ...state, annualTaxInput: action.payload};
            case ANNUAL_TAX_OUTPUT:
                return { ...state, annualTaxOutput: action.payload};
            case ANNUAL_INS_INPUT:
                    return { ...state, annualInsInput: action.payload};
            case ANNUAL_INS_OUTPUT:
                    return { ...state, annualInsOutput: action.payload};
            case ANNUAL_HOA_INPUT:
                    return { ...state, annualHoaInput: action.payload};
            case ANNUAL_HOA_OUTPUT:
                    return { ...state, annualHoaOutput: action.payload};
            case ANNUAL_OTHER_INPUT:
                    return { ...state, annualOtherInput: action.payload};
            case ANNUAL_OTHER_OUTPUT:
                    return { ...state, annualOtherOutput: action.payload};
           case ANNUAL_TAX_SIGN:
                    return { ...state, annualTaxSign: action.payload};
           case ANNUAL_INS_SIGN:
                    return { ...state, annualInsSign: action.payload};
            case ANNUAL_HOA_SIGN:
                    return { ...state, annualHoaSign: action.payload};
            case ANNUAL_OTHER_SIGN:
                    return { ...state, annualOtherSign: action.payload};
            case FHA_MIP:
                    return { ...state, fhaMip: action.payload}; //FHA
            case FHA_MIP_OUTPUT:
                    return { ...state, fhaMipOutput: action.payload}; //FHA
            case SET_TOTAL_LOAN:
                    return { ...state, totalLoan: action.payload}; //FHA
            case MONTHLY_PMI_FHA:
                    return { ...state, monthlyPMIFHA: action.payload}; //FHA
            case MONTHLY_PMI_INPUT_FHA:
                    return { ...state, monthlyPMIInputFHA: action.payload}; //FHA
            case MONTHLY_PMI_RESULT_FHA:
                    return { ...state, monthlyPMIResultFHA: action.payload}; //FHA
            case OTHER_MONTHLY_PAYMENTS_FHA:
                    return { ...state, otherMonthlyPaymentsFHA: action.payload}; //FHA
            case TOTAL_MONTHLY_PAYMENTS_FHA:
                    return { ...state, totalMonthlyPaymentsFHA: action.payload}; //FHA
            case USDA_MIP:
                    return { ...state, USDAMip: action.payload}; //USDA
            case USDA_MIP_OUTPUT:
                    return { ...state, USDAMipOutput: action.payload}; //USDA
            case SET_TOTAL_LOAN_USDA:
                    return { ...state, totalLoanUSDA: action.payload}; //USDA
            case MONTHLY_PMI_USDA:
                    return { ...state, monthlyPMIUSDA: action.payload}; //USDA
            case OTHER_MONTHLY_PAYMENTS_USDA:
                    return { ...state, otherMonthlyPaymentsUSDA: action.payload}; //USDA
            case TOTAL_MONTHLY_PAYMENTS_USDA:
                    return { ...state, totalMonthlyPaymentsUSDA: action.payload}; //USDA
            case MONTHLY_PMI_INPUT_USDA:
                    return { ...state, monthlyPMIInputUSDA: action.payload}; //USDA
            case MONTHLY_PMI_RESULT_USDA:
                return { ...state, monthlyPMIResultUSDA: action.payload}; //USDA
            case VA_MIP:
                return { ...state, VAMip: action.payload}; //VA
            case VA_MIP_OUTPUT:
                return { ...state, VAMipOutput: action.payload}; //VA
            case SET_TOTAL_LOAN_VA:
                return { ...state, totalLoanVA: action.payload}; //VA
            case MONTHLY_PMI_VA:
                return { ...state, monthlyPMIVA: action.payload}; //VA
            case OTHER_MONTHLY_PAYMENTS_VA:
                return { ...state, otherMonthlyPaymentsVA: action.payload}; //VA
            case TOTAL_MONTHLY_PAYMENTS_VA:
                return { ...state, totalMonthlyPaymentsVA: action.payload}; //VA
            case MONTHLY_PMI_INPUT_VA:
                return { ...state, monthlyPMIInputVA: action.payload}; //VA
            case MONTHLY_PMI_RESULT_VA:
                return { ...state, monthlyPMIResultVA: action.payload}; //VA
                case SET_NAME:
                    return { ...state, name: action.payload}; //VA
                    case SET_EMAIL:
                    return { ...state, email: action.payload}; //VA
                    case SET_PHONE:
                    return { ...state,  phone: action.payload}; //VA
                    case SET_TAB_TYPE:
                    return { ...state,  tabTypes: action.payload}; //VA
                    
                case SET_MONTHLY_PMI_PRE:
                return { ...state,  monthlyPMIPre: action.payload}; //VA
                case SET_MONTHLY_PMI_VA_PRE:
                return { ...state,  monthlyPMIVAPre: action.payload}; //VA
                case SET_MONTHLY_FHA_PRE:
                return { ...state,  monthlyPMIFHAPre: action.payload}; //VA
                case SET_MONTHLY_USDA_PRE:
                return { ...state,  monthlyPMIUSDAPre: action.payload}; //VA


               
                case SET_FHA_MIP_OUTPUT_PRE:
                return { ...state,  fhaMipOutputPre: action.payload}; //VA
                case SET_TOTAL_LOAN_PRE:
                return { ...state,  totalLoanPre: action.payload}; //VA
                case SET_VA_MIP_OUTPUT_PRE:
                return { ...state,  VAMipOutputPre: action.payload}; //VA
                case SET_TOTAL_LOAN_VA_PRE:
                return { ...state,  totalLoanVAPre: action.payload}; //VA
                case SET_USDA_MIP_OUTPUT_PRE:
                return { ...state,  USDAMipOutputPre: action.payload}; //VA
                case SET_TOTAL_LOAN_USDA_PRE:
                return { ...state,  totalLoanUSDAPre: action.payload}; //VA
                // new
                case SET_COMPANY_LOGO:
                    return { ...state, companyLogo: action.payload};
                    case SET_LOAN_APP_URL:
                    return { ...state, loanAppUrl: action.payload};
                    case SET_USER_TYPE:
                    return { ...state, userType: action.payload};
                    case SET_PURCHASE_PRICE_PRE_DATA:
                    return { ...state, purchasePricePreData: action.payload};
            default:
                return state;
    }
 }

 export default userReducer