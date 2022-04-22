import { FaChartLine, FaHandsHelping, FaIdCard } from 'react-icons/fa';
import MenuItemDataType from '../../models/MenuItemDataType';
const homeButton: MenuItemDataType = {
  linkAddress: '',
  linkText: 'Home',
  Icon: FaChartLine,
};
const searchButton: MenuItemDataType = {
  linkAddress: '/contact/company',
  linkText: 'Contact',
  Icon: FaIdCard,
};
const dealsButton: MenuItemDataType = {
  linkAddress: '/deals',
  linkText: 'Deals',
  Icon: FaHandsHelping,
};

const menuItemData: Array<MenuItemDataType> = [
  homeButton,
  searchButton,
  dealsButton,
];

export default menuItemData;
