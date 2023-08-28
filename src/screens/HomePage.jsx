import React from 'react'
import PinChange from './PinChange'
import EstadodeCuenta from './EstadodeCuenta'
import Stocks from './Stocks'
import {Sidebar, SidebarItem} from '../components/Sidebar'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



import {
  Receipt,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from 'lucide-react';
import Dashboard from './Dashboard'
import Logout from '../components/Logout'



const HomePage = (props) => {

  return (
    
    <div>
      <Sidebar>

        <SidebarItem 
        path="/"
        icon = {<LayoutDashboard size={20}/>}
        text='Inicio'
      
        />
        
      
        <SidebarItem path="/cash" icon = { <BarChart3 size={20}/>} text = 'Deposito a Cuenta'  />

      <SidebarItem path="/stock/apple" icon = { <Receipt size={20}/>} text = 'Mercado Apple' />
      <SidebarItem path="/stock/tech" icon = { <Receipt size={20}/>} text = 'Mercado Tech' />

      <hr className='my-3' />
      <SidebarItem path="/pin" icon = { <Settings size={20}/>} text = 'Cambio de PIN' />
      <SidebarItem path="/logout" icon = { <UserCircle size={20}/>} text = 'Cerrar Sesion'  />
      


      </Sidebar>

 <Routes>   
 <Route 
  exact path="/" 
  element={
  <Dashboard 
  initialCash = {props.initialCash} 
  stocks ={props.appleStocks} 
  stockS= {props.techStocks} 
  fullname={props.fullname}
  username ={props.username} 


 />}></Route> 

 <Route 
  exact path="/pin" 
  element={
  <PinChange 
  realPin={props.realPin} 
  setRealPin = {props.setRealPin} 
  setLoginStatus = {props.setLoginStatus} />}></Route> 

  <Route path="/cash" element={<EstadodeCuenta initialCash = {props.initialCash} setCash = {props.setCash}/>}/>

  <Route path="/stock/apple" element={<Stocks initialCash = {props.initialCash} setCash = {props.setCash} 
    stocks ={props.appleStocks} setStocks = {props.setappleStock}/>}/>

<Route path="/stock/tech" element={<Stocks initialCash = {props.initialCash} setCash = {props.setCash} 
    stocks= {props.techStocks} setStocks = {props.settechStock}/>}/>
<Route path='/logout' element={ <Logout 
  setLoginStatus = {props.setLoginStatus}
/>}/>

    
</Routes>
    
      </div>
     
  )
}


export default HomePage
