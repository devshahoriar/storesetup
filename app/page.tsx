'use client'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@/redux/store'
import { toggleHomePageMobileMenu } from '@/redux/slices/AppControl'
import { MdClose } from 'react-icons/md'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import DesktopNavigashionFullMenu from '@/components/shared/DesktopNavigashionFullMenu'
import Image from 'next/image'
import home1 from '@/asset/img/home_1.png'
import PublicNav from '@/components/shared/PublicNav'

export default function Home() {
  const dispatch = useDispatch()
  const isMobileMenuOpen = useSelector(
    (s: RootState) => s.appControl.ishomePageMobileOpen
  )

  return (
    <main>
      <PublicNav />

      <div className="mt-16">
        <section className="container md:flex md:items-center md:pt-32">
          <div className="md:w-1/2">
            <h1 className="text-center text-5xl font-bold pt-16 md:text-left  md:text-[65px] xl:text-7xl">
              Setup your <br /> store on <br /> Whatsapp.
            </h1>
            <p className="text-center py-10 md:text-left xl:text-lg opacity-70">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Aut, laudantium?
            </p>
            <div className="w-full flex justify-center flex-col items-center md:items-start md:flex-row md:justify-start md:gap-10">
              <Button size="lg">Get started free</Button>
              <Link className="pt-2 opacity-80" href="/login">
                Log in
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center md:w-1/2">
            <div className="w-[80vw] sm:w-[70vw] md:max-w-[500px] pt-5">
              <Image
                className="object-cover "
                src={home1}
                alt="Home Featchers"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
