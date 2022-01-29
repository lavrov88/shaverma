import React from 'react';
import 'antd/dist/antd.css';
import s from './App.module.scss'
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import GoodsList from './components/GoodsList/GoodsList';
import './App.less';
import { connect } from 'react-redux';
import { setShavermas } from './redux/actions/shavermas';
import { Dispatch } from '@reduxjs/toolkit';


function App(props: any) {

   React.useEffect(() => {
      fetch('/menu/menu.json')
         .then(response => response.json())
         .then(data => props.setShavermas(data))
   }, [])

   return (
      <div className={s.app}>
         <div className={s.app_wrapper}>
            <Header />
            <main>
               <Routes>
                  <Route path="/*" element={ <GoodsList menuData={props.items} /> } />
                  <Route path="/cart" element={ <h2>КОРЗИНА</h2> } />
               </Routes>
            </main>
         </div>

      </div>
   );
}

const MSTP = (state: any) => {
   return {
      items: state.shavermas.items
   }
}

const MDTP = (dispatch: Dispatch) => {
   return {
      setShavermas: (items: Array<any>) => dispatch(setShavermas(items))
   }
}

export default connect(MSTP, MDTP)(App);
