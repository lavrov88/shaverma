import React from 'react';
import 'antd/dist/antd.css';
import s from './App.module.scss'
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import GoodsList from './components/GoodsList/GoodsList';
import './App.less';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShavermas } from './redux/actions/shavermas';
import { RootState } from './redux/reducers';
import Cart from './components/Cart/Cart';

function App() {

   const dispatch = useDispatch()
   const state = useSelector((state: RootState) => {
      return {
         shavermas: state.shavermas,
         navMenu: state.navMenu,
         cart: state.cart
      }
   })
   

   React.useEffect(() => {
      dispatch(fetchShavermas(state.navMenu.category, state.navMenu.sortBy))
   }, [state.navMenu.category, state.navMenu.sortBy])


   return (
      <div className={s.app}>
         <div className={s.app_wrapper}>
            <Header />
            <main>
               <Routes>
                  <Route path="/*" element={ <GoodsList 
                                                menuData={state.shavermas.items} 
                                                isLoading={state.shavermas.isLoading}
                                                cartItems={state.cart.items}
                                                dispatch={dispatch} /> } />
                  <Route path="/cart" element={ <Cart 
                                                cart={state.cart} 
                                                dispatch={dispatch} /> } />
               </Routes>
            </main>
         </div>
      </div>
   );
}

export default App
