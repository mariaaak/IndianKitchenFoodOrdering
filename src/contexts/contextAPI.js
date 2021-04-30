import React, { createContext, useContext, useState, useEffect } from 'react';

export const Context = createContext();

const ContextProvider = (props) => {
    const [cart, setCart] = useState([
    ]);

    const add = (cart_local) =>{

        cart.splice(0,cart.length);
        cart_local.map((item)=>{
            cart.push(item);
        })
        setCart([...cart])
    }

    const addItems = (item_name, item_price) => {
        let qty_update = false;
        let qty;
        let index;
        console.log(item_name)
        cart.map((item) => {

            if (item.item_name === item_name) {
                qty_update = true;
                qty = item.qty;
                index = cart.findIndex((element, key) => {
                    if (element.item_name === item_name)
                        return true;
                })

            }
        })

        
        if (qty_update) {
            cart.splice(index, 1,{ "item_name": item_name, "item_price": item_price, "qty": qty + 1 });
            setCart([...cart]);
        }
        else {
            let item_added={"item_name": item_name, "item_price": item_price, "qty": 1 };
            cart.push(item_added);
            setCart([...cart]);
        }

        localStorage.setItem('cart',JSON.stringify(cart));
        
    }

    const addQty = (item_updated) => {

        let index;
        console.log(cart)
        index = cart.findIndex((element, key) => {
            if (element.item_name === item_updated.item_name)
                return true;
        })
        cart.splice(index, 1);
        cart.splice(index, 0, { "item_name": item_updated.item_name, "item_price": item_updated.item_price, "qty": item_updated.qty + 1 });
        setCart([...cart]);
        
        localStorage.setItem('cart',JSON.stringify(cart));
      

    }

    const reduceQty = (item_updated) =>{

        let index;
        
        if(item_updated.qty-1>0){
            index = cart.findIndex((element, key) => {
                if (element.item_name === item_updated.item_name)
                    return true;
            })
            cart.splice(index, 1);
            cart.splice(index, 0, { "item_name": item_updated.item_name, "item_price": item_updated.item_price, "qty": item_updated.qty - 1 });
            setCart([...cart]);

        }
        else 
        {
            index = cart.findIndex((element, key) => {
                if (element.item_name === item_updated.item_name)
                    return true;
            })
            cart.splice(index, 1);
            setCart([...cart]);
        }
        localStorage.setItem('cart',JSON.stringify(cart));
       

    }

    const deleteCart = (item_deleted) => {

        let index;
        cart.map((item) => {
            
            console.log(item.item_name)
            index = cart.findIndex((element, key) => {

                if (element.item_name === item_deleted.item_name)
                    return true;
            })

        })

        console.log(index)
        cart.splice(index, 1);
        setCart([...cart]);
        localStorage.setItem('cart',JSON.stringify(cart));

    }

    const clearAllCart = () =>{
        cart.splice(0,cart.length);
        setCart([...cart]);
        console.log(cart)

    }

    return (
        <Context.Provider value={{ cart,add:add, addItems: addItems, deleteItem:deleteCart,addQty:addQty, reduceQty:reduceQty, clearAllCart:clearAllCart }}>
            {props.children}
        </Context.Provider>
    )


}


export default ContextProvider;