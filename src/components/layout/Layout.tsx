import { Navbar } from './Navbar'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="px-8 pt-4 pb-8 max-w-[1920px] mx-auto">{children}</main>
    </div>
  )
}
