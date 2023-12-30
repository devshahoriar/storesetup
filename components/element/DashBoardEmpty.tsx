import Link from 'next/link'
import { Button } from '../ui/button'

const ITEMS = [
  {
    title: 'Create your first product',
    subTitle:
      'Draw in customers with high quality images and clear descriptions',
    btnTitle: 'Create product',
    btnLink: '/',
  },
  {
    title: 'Add delivery options',
    subTitle:
      'Set delivery options to avoid explaining and calculating delivery fee manually',
    btnTitle: 'Add delivery',
    btnLink: '/',
  },
  {
    title: 'Set up payment method',
    subTitle:
      'Add preferred payment methods such as bank transfer and credit cards',
    btnTitle: 'Add payment',
    btnLink: '/',
  },
  {
    title: 'Set up your custom domain',
    subTitle:
      'Build your own brand and trust with your custom domain. Paid plan is required',
    btnTitle: 'Add domain',
    btnLink: '/',
  },
  {
    title: 'Invite your team',
    subTitle: 'Invite your team members to manage orders and products together',
    btnTitle: 'Invite team',
    btnLink: '/',
  },
]

const StapeItem = ({ no, title, subTitle, btnTitle, btnLink }: any) => {
  return (
    <div className="border py-5 px-4 my-4 md:my-5 rounded-2xl flex flex-col md:flex-row md:items-center bg-white shadow-sm">
      <div className="bg-black bg-opacity-5 h-10 w-10 flex justify-center items-center rounded-full">
        <span className="">{no}</span>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:w-full md:items-center ml-3">
        <div className="mt-3 md:mt-0">
          <h1 className="font-medium text-lg">{title}</h1>
          <p className="text-sm opacity-70">{subTitle}</p>
        </div>
        <Button asChild className="mt-3 md:w-fit">
          <Link href={btnLink}>{btnTitle}</Link>
        </Button>
      </div>
    </div>
  )
}

const DashBoardEmpty = () => {
  return (
    <section className="px-3 mt-5 w-full h-full md:px-10 xl:px-28">
      <div>
        <h1 className="font-bold text-lg">Getting started</h1>
        <p className="opacity-60 text-sm md:mt-2">
          Follow the steps below to set up your store
        </p>
      </div>
      <div className='md:mt-5 pb-5'>
        {ITEMS.map((e, i) => (
          <StapeItem
            key={i}
            title={e.title}
            subTitle={e.subTitle}
            btnTitle={e.btnTitle}
            btnLink={e.btnLink}
            no={i+1}
          />
        ))}
      </div>
    </section>
  )
}

export default DashBoardEmpty
