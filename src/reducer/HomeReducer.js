import expenseData from '../data/expenseData.json';
import chartData from '../data/chartData.json';
import categoriesList from '../data/categoriesList.json';
  
const initialState = {
    dataFromApi: expenseData,
    chartData: chartData,
    categoriesList: categoriesList,
};
  
export default (state = initialState, action) => {
    switch (action.type) {
        case 'AddExpenseToFullList':
            return {
                ...state,
                dataFromApi: action.data
            };
        default:
            return state;
    }
};