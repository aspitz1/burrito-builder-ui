import React, { Component } from 'react';
import './App.css';
import { getOrders, postOrder, deleteOrder } from '../../apiCalls';
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

  finishOrder = (id) => {
    deleteOrder(id)
      .then(msg => {
        console.log(msg);
        const updatedOrders = this.state.orders.filter(order => order.id !== id);
        this.setState({ orders: updatedOrders });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm submitOrder={this.submitOrder} />
        </header>

        <Orders orders={this.state.orders} finishOrder={this.finishOrder}/>
      </main>
    );
  }
}


export default App;
