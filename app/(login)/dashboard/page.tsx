import DashBoardEmpty from '@/components/element/DashBoardEmpty'
import DesktopSideBar from '@/components/shared/DesktopSideBar'

const page = () => {
  return (
    <section className="flex w-full h-full pb-5">
      <div className='w-[350px] hidden md:block xl:w-[450px]'>
        <DesktopSideBar />
      </div>
      <div className='bg-black bg-opacity-5 w-full'>
        <DashBoardEmpty />
      </div>
    </section>
  )
}

export default page
