import {createContext, useState} from "react"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";



export const UserContext = createContext();


export function UserProvider ({children }) {

    const clients = {
        name:"",
        table:""
    }
     const [order, setOrder] = useState([]);
     
     
     const [client, setClient] = useState(clients);
     
    
    
    //sumar 1 producto
    const add = (id) => {
        const plus = order.map(item => item.id === id ? {...item, count: item.count +1} : item) 
        setOrder(plus)
    };
    //Restar 1 producto
    const less = (id) => {
        const reduce = order.map(item => item.id === id ? {...item, count: item.count -1} : item)
        setOrder(reduce)
    };
    //Eliminar un producto
    const remove = (dish) => {
        const end = order.filter(item => item.id !== dish)
        setOrder(end)
    };
    //Calculo de cuentas
    const totalPrice = order.map(element => (element.price * element.count))
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const total = totalPrice.reduce(reducer, 0)
    //Formato de como se agregara el producto en la "comanda"
    const AddProduct = (food) =>{
        const product = {
            name:food.name,
            price:food.price,
            id:food.id,
            count:1
     
       }
       //si los id son iguales se agrega a la comanda 
       if(order.find(item => food.id === item.id)) {
        add(food.id)
        return
    }
        setOrder([...order, product])
     
    }
    //fecha
    const orderDate = () => {
        const today = new Date ();
        const date = `${today.getDate()} - ${(today.getMonth() + 1)} - ${today.getFullYear()}`;
        const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        const dateTime = ` Fecha: ${date} - Hora: ${time}`;
        return dateTime;
    };
    //limpiar comanda 
    const resetOrder = () =>{
        setOrder([])
        setClient(clients)
       
        
    }

     //guardar la comanda 
     const saveOrder = async() => {
       if(!client.name.trim() & !client.table.trim()){
           console.log("faltan datos ")
           return;
       }
         try{
            const docRef = await addDoc(collection(db, "commands"),{
                Name:client.name,
                Table: client.table,
                Total: total,
                Order: order,
                Time: orderDate(),
               Status: "pendiente",

            });
            
            resetOrder()
            return docRef
            
         } catch (error){
             console.log(error)

         }
            
     };
     

    
   return (
       <UserContext.Provider value={{order, setOrder, AddProduct, add, less, remove, total, saveOrder, client, setClient, resetOrder, clients}}>
           {children}
       </UserContext.Provider>
   )



}