'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const pathname = usePathname();
  
  const links = (
    <>
      <li>
        <Link href={"/"} className={pathname==='/' ? 'text-blue-400':''}>Home</Link>
        <Link href={"/about"} className={pathname==='/about' ? 'text-blue-400':''}>About</Link>
        <Link href={"/contact"} className={pathname==='/contact' ? 'text-blue-400':''}>Contact</Link>
        <Link href={"/about/developers"} className={pathname==='/about/developers' ? 'text-blue-400':''}>Developer</Link>
        <Link href={"/blogs"} className={pathname==='/blogs' ? 'text-blue-400':''}>Blogs</Link>
        <Link href={"/dashboard"} className={pathname==='/dashboard' ? 'text-blue-400':''}>Dashboard</Link>
        <Link href={"/Users"} className={pathname==='/Users' ? 'text-blue-400':''}>Users</Link>
        <Link href={"/posts"} className={pathname==='/posts' ? 'text-blue-400':''}>Posts</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}

          </ul>
        </div>
        <Link href={'/'} className="btn btn-ghost text-xl">daisyUI</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

            {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
