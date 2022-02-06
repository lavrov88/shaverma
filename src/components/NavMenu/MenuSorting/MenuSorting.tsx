import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { TSortingName } from "../../../common/types";
import s from './MenuSorting.module.scss'
import { setSorting } from "../../../redux/actions/navMenu";

const MenuSorting = (props: any) => {
   
      const onSortingChanged = (e: any) => {
      setTimeout(() => {
         props.dispatch(setSorting(e.key))
      }, 100) // timeout for better menu dissapearing animation
   }

   const sorting = (
      <Menu onClick={onSortingChanged} selectedKeys={props.sortBy}>
         <Menu.Item key="default">по умолчанию</Menu.Item>
         <Menu.Item key="price">по цене</Menu.Item>
         <Menu.Item key="alphabet">по алфавиту</Menu.Item>
      </Menu>
   )

   const returnSortingLabel = (sortingName: TSortingName) => {
      if (sortingName === 'default') {
         return 'по умолчанию'
      }
      if (sortingName === 'price') {
         return 'по цене'
      }
      if (sortingName === 'alphabet') {
         return 'по алфавиту'
      }
   }

   return (
      <div className={s.menu_sorting}>
         Сортировка:
         <Dropdown overlay={sorting} trigger={['click']} placement="bottomRight" >
            <Button type="link">
               {returnSortingLabel(props.sortBy)} <DownOutlined />
            </Button>
         </Dropdown>
      </div>
   )
}

export default MenuSorting