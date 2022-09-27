const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
      .then(data => data.orders)
}

const postOrder = (order) => {
  return fetch("http://localhost:3001/api/v1/orders", {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then((response) => response.json())
    .then((data) => data);
}

const deleteOrder = (id) => {
  return fetch(`http://localhost:3001/api/v1/orders/${id}`, {
    method: "DELETE",
  })
  .then((response) => {
    if(!response.ok) {
      throw new Error('Oops, looks like something went wrong.')
    } else {
      console.log(response);
      return 'This order has been completed.'
    }
  })
  .catch(err => {
    throw err
  })
}

export {
  getOrders,
  postOrder,
  deleteOrder
}