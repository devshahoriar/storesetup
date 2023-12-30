import { FaArrowRight } from 'react-icons/fa6'
import { FiShoppingCart } from 'react-icons/fi'
import { MdOutlineOpenInNew } from 'react-icons/md'
import { MobileNavItem } from './Nav'
import { AiOutlineHome, AiTwotoneThunderbolt } from 'react-icons/ai'

const DesktopSideBar = () => {
  return (
    <div className="w-full">
      <section className="p-4">
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
        <div className='flex flex-col justify-between h-[75vh]'>
          <div>
            <MobileNavItem icon={<AiOutlineHome />} title="Home" />
          </div>
          <div className="w-full bg-gradient-to-r from-blue-500 to-blue-700 z-10 py-1 px-2 text-white text-center flex justify-center items-center gap-3 rounded-lg">
            <AiTwotoneThunderbolt />
            Upgrade to Premium plan
          </div>
        </div>
      </section>
    </div>
  )
}

export default DesktopSideBar
