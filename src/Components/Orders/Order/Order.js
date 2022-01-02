import React from 'react';

const Order = props => {
    // console.log(props);
    const ingredientSummary = props.order.ingredients.map( item => {
        return(
            <span style={{
                border: "1px solid grey",
                borderRadius: "5px",
                padding: "5px",
                marginLeft: "5px",
                marginBottom: "10px",
            }} key={item.type}> 
                {item.amount} x <span style={{
                    textTransform: "capitalize",
            }}> 
                {item.type} </span> </span>
        )
    })
    return (
        <div style={{
            border: "1px solid grey",
            boxShadow: "1px 5px 10px 0 #888888",
            borderRadius: "5px",
            padding: "20px",
            marginBottom: "10px",
        }}>
            <p>Order Number: {props.order._id} </p>
            <p>Delivery Address: {props.order.customer.deliveryAddress} </p>
            <hr />
            {ingredientSummary}
            <hr />
            <p>Total: {props.order.price} BDT</p>
            <br />
        </div>
    )
}

export default Order;