import NavBarItem from '@/components/NavBar/NavBarItem/NavBarItem';

const NavBar = () => {
  const menuItems = [
    { name: 'Hoteles', link: '/' },
    { name: 'Clientes', link: '/client' },
    { name: 'Reservas', link: '/booking' },
  ];
  return (
    <div className="sticky inset-0 max-w-full z-50 p-2 shadow-sm">
      <div className="flex items-center justify-center">
        <ul className="flex items-center gap-10">
          {menuItems.map(m => (
            <NavBarItem key={m.name} menuName={m.name} link={m.link} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
