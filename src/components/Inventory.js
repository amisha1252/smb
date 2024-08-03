// import React, { useState } from 'react';
// import './Inventory.css';

// const InventoryManagement = () => {
//   // Initial stock
//   const initialStock = [
//     { name: 'Product A', stock: 100 },
//     { name: 'Product B', stock: 100 },
//     { name: 'Product C', stock: 100 },
//     { name: 'Product D', stock: 100 },
//     { name: 'Product E', stock: 100 }
//   ];

//   const [stock, setStock] = useState(initialStock);
//   const [orders, setOrders] = useState([]);
//   const [orderName, setOrderName] = useState('');
//   const [orderQuantity, setOrderQuantity] = useState('');

//   const handleAddOrder = () => {
//     const quantity = parseInt(orderQuantity, 10);
//     if (!orderName || isNaN(quantity) || quantity <= 0) return;

//     // Add new order
//     setOrders([...orders, { name: orderName, quantity }]);

//     // Update stock
//     setStock(prevStock =>
//       prevStock.map(product =>
//         product.name === orderName
//           ? { ...product, stock: product.stock - quantity }
//           : product
//       )
//     );

//     // Reset input fields
//     setOrderName('');
//     setOrderQuantity('');
//   };

//   return (
//     <div className="inventory-management">
//       <h1>Inventory Management</h1>

//       <div className="order-form">
//         <input
//           type="text"
//           placeholder="Type your order name"
//           value={orderName}
//           onChange={(e) => setOrderName(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Quantity"
//           value={orderQuantity}
//           onChange={(e) => setOrderQuantity(e.target.value)}
//         />
//         <button onClick={handleAddOrder}>Add Order</button>
//       </div>

//       <div className="tables">
//         <div className="orders-table">
//           <h2>Orders Placed</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Order Placed</th>
//                 <th>Quantity</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order, index) => (
//                 <tr key={index}>
//                   <td>{order.name}</td>
//                   <td>{order.quantity}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="stock-table">
//           <h2>Stock Levels</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Product Name</th>
//                 <th>Stock Left</th>
//               </tr>
//             </thead>
//             <tbody>
//               {stock.map((product, index) => (
//                 <tr key={index}>
//                   <td>{product.name}</td>
//                   <td>{product.stock}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InventoryManagement;


import React, { useState } from 'react';
import './Inventory.css'; // Import CSS for styling

const InventoryManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', stock: 100 },
    { id: 2, name: 'Product B', stock: 100 },
    { id: 3, name: 'Product C', stock: 100 },
    { id: 4, name: 'Product D', stock: 100 },
    { id: 5, name: 'Product E', stock: 100 },
  ]);
  const [orders, setOrders] = useState([]);
  const [orderName, setOrderName] = useState('');
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [error, setError] = useState('');

  const addOrder = () => {
    const product = products.find(p => p.name === orderName);
    if (!product) {
      setError('Product not found');
      return;
    }
    if (orderQuantity < 0) {
      setError('Quantity cannot be negative');
      return;
    }
    if (orderQuantity > product.stock) {
      setError('Not enough stock available');
      return;
    }
    
    setProducts(products.map(p =>
      p.name === orderName ? { ...p, stock: p.stock - orderQuantity } : p
    ));
    setOrders([...orders, { name: orderName, quantity: orderQuantity }]);
    setOrderName('');
    setOrderQuantity(0);
    setError('');
  };

  return (
    <div className="inventory-management">
      <h1>Inventory Management</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="Type your order name"
          value={orderName}
          onChange={(e) => setOrderName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={orderQuantity}
          onChange={(e) => setOrderQuantity(Number(e.target.value))}
        />
        <button onClick={addOrder}>Add Order</button>
        {error && <p className="error">{error}</p>}
      </div>
      <div className="table-container">
        <div className="orders-table">
          <h2>Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Order Placed</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="stock-table">
          <h2>Stock</h2>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Stock Left</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;
