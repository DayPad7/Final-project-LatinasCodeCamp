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


const HomePage = (props) => {

  return (
    
    <div>
      <Sidebar>

        <SidebarItem 
        path="/"
        icon = {<LayoutDashboard size={20}/>}
        text='Dashboard'
      
        />
        
      
        <SidebarItem path="/cash" icon = { <BarChart3 size={20}/>} text = 'Estado de Cuenta'  />

      <SidebarItem path="/stock/apple" icon = { <Receipt size={20}/>} text = 'Acciones' />
      <SidebarItem path="/stock/tech" icon = { <Receipt size={20}/>} text = 'Tech' />

      <hr className='my-3' />
      <SidebarItem path="/pin" icon = { <Settings size={20}/>} text = 'Cambio de PIN' />
      <SidebarItem path="/logout" icon = { <UserCircle size={20}/>} text = 'Cerrar Sesion'  />


      </Sidebar>

 <Routes>   
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
    
</Routes>
    
      </div>
     
  )
}


export default HomePage
