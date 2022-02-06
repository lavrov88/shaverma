import React from 'react'
import ContentLoader from "react-content-loader"
import s from './GoodsListItem.module.scss'



const ItemLoader = () => {
   return (
      <div className={s.goods_list_item}>
         <ContentLoader
            speed={2}
            width={280}
            height={486}
            viewBox="0 0 280 486"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
         >
            <rect x="40" y="290" rx="10" ry="10" width="200" height="30" />
            <rect x="5" y="330" rx="10" ry="10" width="270" height="100" />
            <rect x="10" y="440" rx="6" ry="6" width="55" height="35" />
            <rect x="150" y="440" rx="15" ry="15" width="120" height="35" />
            <rect x="70" y="0" rx="10" ry="10" width="140" height="270" />
         </ContentLoader>
      </div>
   )
}

const getItemLoaderArray = (num: number) => {
   const arr = []
   for (let i = 0; i < num; i++) {
      arr.push(<ItemLoader key={i} />)
   }
   return arr
}


export default getItemLoaderArray