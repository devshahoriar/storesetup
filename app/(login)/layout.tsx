import Nav from '@/components/shared/Nav'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full md:overflow-hidden">
      <Nav />
      {children}
    </main>
  )
}

export default layout
