'use client'
import { IoIosLogOut, IoMdMenu } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'
import { IoClose } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@/redux/store'
import { toggleMobileOpen } from '@/redux/slices/AppControl'
import Link from 'next/link'
import { FiBook } from 'react-icons/fi'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '../ui/menubar'
import { FaArrowRight, FaRegLightbulb } from 'react-icons/fa6'
import { useMediaQuery } from 'usehooks-ts'
import { FiShoppingCart } from 'react-icons/fi'
import { MdOutlineOpenInNew } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { IoMdArrowDropright } from 'react-icons/io'
import { AiTwotoneThunderbolt } from 'react-icons/ai'

export const MobileNavItem = ({ icon, title, link }: any) => {
  return (
    <div className="flex items-center justify-between my-3 mx-2 bg-black bg-opacity-10 px-2 py-2">
      <div className="flex items-center gap-3">
        {icon}
        <p>{title}</p>
      </div>
      <IoMdArrowDropright />
    </div>
  )
}

const Nav = () => {
  const dispatch = useDispatch()
  const isMobileOpen = useSelector(
    (store: RootState) => store.appControl.isMobileOpen
  )
  const isMd = useMediaQuery('(max-width: 768px)')
  return (
    <nav className="flex justify-between items-center px-3 py-3 border-b relative">
      <div className="md:hidden">
        <span onClick={() => dispatch(toggleMobileOpen())}>
          {isMobileOpen ? <IoClose /> : <IoMdMenu />}
        </span>
      </div>
      <div>
        <Link href="/" className="font-bold">
          App Name
        </Link>
      </div>
      <div>
        <Menubar className="border-none shadow-none">
          <MenubarMenu>
            <MenubarTrigger>
              <SlUser />
            </MenubarTrigger>
            <MenubarContent className="p-2 mr-1">
              <p className="font-medium opacity-55 text-sm text-center">
                shuvo1556@gmail.com
              </p>
              <MenubarItem>
                My Account{' '}
                <MenubarShortcut>
                  <SlUser />
                </MenubarShortcut>
              </MenubarItem>
              <MenubarItem className="text-red-600">
                Log out
                <MenubarShortcut>
                  <IoIosLogOut className="text-red-600" />
                </MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Documentation
                <MenubarShortcut>
                  <FiBook />
                </MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Updates
                <MenubarShortcut>
                  <FaRegLightbulb />
                </MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      {isMd && isMobileOpen && (
        <div className="fixed top-[62px] left-0 h-full w-full bg-white !z-20">
          <div className="m-4">
            <span className="text-sm opacity-60 border rounded-full px-2 border-black border-opacity-65">
              Basic
            </span>

            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center">
                <span className="bg-black bg-opacity-5 p-2 rounded-lg">
                  <FiShoppingCart className="text-2xl opacity-50" />
                </span>
                <p className="ml-2">Shuvo</p>
              </div>
              <FaArrowRight className="opacity-50" />
            </div>

            <div className="bg-black bg-opacity-5 flex justify-between items-center py-2 px-2 mt-3 rounded-lg">
              <p className="opacity-70">shuvo.com/shuvo</p>
              <MdOutlineOpenInNew className="opacity-70" />
            </div>
            <div className="flex flex-col justify-between h-[70vh]">
              <div>
                <MobileNavItem icon={<AiOutlineHome />} title="Home" />
              </div>
              <div className="w-full bg-gradient-to-r from-blue-500 to-blue-700 z-10 py-1 px-2 text-white text-center flex justify-center items-center gap-3 rounded-lg">
                <AiTwotoneThunderbolt />
                Upgrade to Premium plan
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav
