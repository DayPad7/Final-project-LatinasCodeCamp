import React from 'react'
import PinChange from './PinChange'
import EstadodeCuenta from './EstadodeCuenta'
import Stocks from './Stocks'
import {Sidebar, SidebarItem} from '../components/Sidebar'
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
        icon = {<LayoutDashboard size={20}/>}
        text='Dashboard'
      
        />

      <SidebarItem icon = { <BarChart3 size={20}/>} text = 'Estado de Cuenta'  />
      <SidebarItem icon = { <Receipt size={20}/>} text = 'Acciones' />
      <hr className='my-3' />
      <SidebarItem icon = { <Settings size={20}/>} text = 'Cambio de PIN' />
      <SidebarItem icon = { <UserCircle size={20}/>} text = 'Cerrar Sesion'  />


      </Sidebar>
    <h1> Bienvenidos a Latinas Stock Bank </h1>
   
    <PinChange realPin={props.realPin} setRealPin = {props.setRealPin} 
    setLoginStatus = {props.setLoginStatus} />

    <EstadodeCuenta initialCash = {props.initialCash} setCash = {props.setCash}/>

    <Stocks initialCash = {props.initialCash} setCash = {props.setCash} 
    stocks ={props.appleStocks} setStocks = {props.setappleStock}/>

    <Stocks initialCash = {props.initialCash} setCash = {props.setCash} 
    stocks= {props.techStocks} setStocks = {props.settechStock}/>
      </div>
  )
}


export default HomePage
