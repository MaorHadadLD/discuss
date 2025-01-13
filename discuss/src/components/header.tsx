import Link from 'next/link';
import { Suspense } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import HeaderAuth from '@/components/header-auth';
import SearcInput from '@/components/search-input';


export default function Header() {
  return (
    <Navbar className="shadow mb-6 bg-white">
      <NavbarBrand>
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense>
            <SearcInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
