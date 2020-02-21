import React from 'react';
import { connect } from 'react-redux';
import './home.css';
import TabNav from '../components/tab';
import * as AD from '../actions';

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state={

		};
	}

	handleAddExpense = (item) => {
		let tempList = {...this.props.dataFromApi};
		tempList.bills.push(item);
		this.props.updateExpenseToList(tempList);
	}

	handleUpdateExpense = (newExpense, oldExpense) => {
		let tempList = {...this.props.dataFromApi};
		for ( let i=0; i<tempList.bills.length; i++ ){
			if( tempList.bills[i].id === oldExpense.id ){
				tempList.bills[i].category = newExpense.category;
				tempList.bills[i].description = newExpense.description;
				tempList.bills[i].amount = newExpense.amount;
				tempList.bills[i].important = newExpense.important;
			}
		}
		this.props.updateExpenseToList(tempList);
	}

	handleDeleteExpense = (item) => {
		let tempList ={ ...this.props.dataFromApi};
		for ( let i=0; i<tempList.bills.length; i++ ){
			if( tempList.bills[i].id === item.id ){
				tempList.bills.splice(i,1);
			}
		}
		this.props.updateExpenseToList(tempList);
	}

  render(){
		const {} = this.state;
		const { dataFromApi, chartData, categoriesList } = this.props;
		console.log(dataFromApi,'props');
    return (
			<div className='Flex1' >
				<div className="Header">
					<p className='Text20BlackBold' >Expense Management Dashboard</p>
				</div>
				<div className="TabBlock" >
					<TabNav 
						tableData={dataFromApi} 
						addExpense={(item)=>this.handleAddExpense(item)}
						updateExpense={(newExpense, oldExpense)=>this.handleUpdateExpense(newExpense, oldExpense)}
						deleteExpense={(item)=>this.handleDeleteExpense(item)}
						chartData={chartData}
						categoriesList={categoriesList}
					/>
				</div>
			</div>
    );
  }
}

const mapStateToProps = state => {
  const { dataFromApi, chartData, categoriesList  } = state.HomeReducer;
  return {
    dataFromApi, chartData, categoriesList
  }
}

const mapDispatchToProps = dispatch => ({
	updateExpenseToList: (data) => dispatch(AD.updateExpenseToList(data)),
})

export default connect( mapStateToProps, mapDispatchToProps )(Home)