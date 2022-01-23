import React from 'react';
import 'antd/dist/antd.css';
import s from './App.module.scss'
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/Menu';
import GoodsList from './components/GoodsList/GoodsList';


function App() {
   return (
      <div className={s.app}>
         <div className={s.app_wrapper}>
            <Header />
            <NavMenu />
            <main>
               <GoodsList />
            </main>
         </div>

      </div>
   );
}

export default App;
