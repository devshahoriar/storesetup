'use client'
import { IoMdMenu } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'
import { IoClose } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@/redux/store'
import { toggleMobileOpen } from '@/redux/slices/AppControl'
import Link from 'next/link'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '../ui/menubar'

const Nav = () => {
  const dispatch = useDispatch()
  const isMobileOpen = useSelector(
    (store: RootState) => store.appControl.isMobileOpen
  )
  return (
    <nav className="flex justify-between items-center px-3 py-3 border-b">
      <div className="md:hidden">
        <span onClick={() => dispatch(toggleMobileOpen())}>
          {isMobileOpen ? <IoClose /> : <IoMdMenu />}
        </span>
      </div>
      <div>
        <Link href="/">App Name</Link>
      </div>
      <div>
        <Menubar className="border-none shadow-none">
          <MenubarMenu>
            <MenubarTrigger>
              <SlUser />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Shuvo
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </nav>
  )
}

export default Nav
