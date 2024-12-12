import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';

const Cart = () => { 
    const { cart, updateQuantity, total, removeFromCart } = useContext(CartContext);
    const { token } = useContext(UserContext); // Traigo el token para válidar en el boton pagar.

    return (
        <div className="container mt-3 mx-auto container-custom">
            <h2 className="text-center mb-4">Detalles del Pedido:</h2>
            <div className="row justify-content-center">
                {cart.map((pizza) => (
                    <div key={pizza.id} className="col-12 mb-4">
                        <div className="d-flex flex-column flex-md-row align-items-center border p-3 rounded shadow-sm justify-content-between">
                            <img
                                src={pizza.img}
                                alt={pizza.name}
                                className="img-fluid rounded mb-3 mb-md-0 pizza-img"
                            />
                            <div className="ms-md-2 me-0 me-md-auto pizza-info mb-3 mb-md-0">
                                <h5 className="text-truncate pizza-name text-capitalize">{pizza.name}:</h5>
                            </div>
                            <div className="ms-3 d-flex d-flex-align">
                                <span className="d-block d-block-price">
                                    ${(pizza.price * pizza.count).toLocaleString()}
                                </span>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => updateQuantity(pizza.id, -1)}
                                >
                                    -
                                </button>
                                <span className="mx-2">{pizza.count}</span>
                                <button
                                    className="btn btn-success btn-sm"
                                    onClick={() => updateQuantity(pizza.id, 1)}
                                >
                                    +
                                </button>
                                <button
                                    className="btn btn-warning btn-sm ms-2"
                                    onClick={() => removeFromCart(pizza.id)}
                                >
                                    🗑
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-1">
                <h3>Total: ${total.toLocaleString()}</h3>
                {/* Deshabilita el botón de "Pagar" si el token es false */}
                <button className="btn btn-success mt-2 mb-2" disabled={!token}>
                    {token ? 'Pagar' : 'Inicia sesión para pagar'}
                </button>
            </div>
        </div>
    );
};

export default Cart;

