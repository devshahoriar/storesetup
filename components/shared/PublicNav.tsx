import Link from 'next/link'
import { Separator } from '../ui/separator'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import DesktopNavigashionFullMenu from './DesktopNavigashionFullMenu'
import { toggleHomePageMobileMenu } from '@/redux/slices/AppControl'
import { MdClose } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Button } from '../ui/button'

const PublicNav = () => {

  const dispatch = useDispatch()
  const isMobileMenuOpen = useSelector(
    (s: RootState) => s.appControl.ishomePageMobileOpen
  )

  return (
    <nav className="fixed w-screen top-0 left-0 right-0 bg-white z-20">
      <section className="flex justify-between items-center h-16 text-lg border-b px-5 md:px-10">
        <div className="flex items-center">
          <h1 className="font-bold">
            <Link href="/">App name</Link>
          </h1>
          <div className="md:flex items-center hidden ml-10">
            <DesktopNavigashionFullMenu />
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={() => dispatch(toggleHomePageMobileMenu())}>
            {isMobileMenuOpen ? <MdClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        <div className="md:flex gap-4 hidden">
          <Button className="w-1/2" variant="outline" size="lg">
            Log in
          </Button>
          <Button className="w-1/2">Sign in</Button>
        </div>
      </section>

      {isMobileMenuOpen && (
        <section className="px-4 mt-3 md:hidden">
          <div className="flex gap-4">
            <Button className="w-1/2" variant="outline" size="lg">
              Log in
            </Button>
            <Button className="w-1/2">Sign in</Button>
          </div>
          <div className="flex flex-col my-4 gap-2 ">
            <Link href="#">Priching</Link>
            <Link href="#">Template</Link>
          </div>
          <Separator />
          <div>
            <p className="text-sm mt-4">Our services</p>
            <div className="flex flex-col my-4 gap-2 ">
              <Link href="#">Priching</Link>
              <Link href="#">Template</Link>
            </div>
          </div>
          <Separator />
          <div>
            <p className="text-sm mt-4">Our services</p>
            <div className="flex flex-col my-4 gap-2 ">
              <Link href="#">Priching</Link>
              <Link href="#">Template</Link>
            </div>
          </div>
        </section>
      )}
    </nav>
  )
}

export default PublicNav
