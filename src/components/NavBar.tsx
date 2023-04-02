import type { FC } from 'react';

interface NavBarProps { }

const NavBar: FC<NavBarProps> = ({ }) => {
  return (
    <nav className='absolute right-[5%] bottom-[5%]'>
      <header>
        <ul className='list-none flex gap-3'>
          <li><a href="#">chi siamo</a></li>
          <li><a href="#">collezione</a></li>
          <li><a href="#">carrello</a></li>
          <li><a href="facebook.com">fb</a></li>
          <li><a href="instagram.com">ig</a></li>
          <li><a href="#">wh</a></li>
          <li><a href="youtube.com">yt</a></li>
        </ul>
      </header>
    </nav>
  );
}
export default NavBar;
