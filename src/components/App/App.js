import React, { Component } from 'react';
import './App.css';
import { getOrders, postOrder } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    getOrders()
      .then(orders => this.setState({ orders: orders }))
      .catch(err => console.error('Error fetching:', err));
  }
  
  submitOrder = (order) => {
    postOrder(order)
    .then(data => {
      this.setState({ orders: [...this.state.orders, data] })
    })
    .catch(err => console.log('Error posting', err))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm submitOrder={this.submitOrder} />
        </header>

        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
