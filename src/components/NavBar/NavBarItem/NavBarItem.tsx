import { NavLink } from 'react-router-dom';

type NavBarItemsProps = {
  menuName: string;
  link: string;
};

const NavBarItem = ({ menuName, link }: NavBarItemsProps) => {
  return (
    <li className="font-bold lg:text-xl md:text-base xs:text-base px-2 py-1">
      <NavLink to={link} className={({ isActive }) => (isActive ? 'text-blue-700' : '')}>
        <div className="cursor-pointer hover:text-blue-700">{menuName}</div>
      </NavLink>
    </li>
  );
};

export default NavBarItem;
