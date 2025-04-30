type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <main className="px-2 md:px-4 lg:px-6 pt-4 max-w-[1920px] mx-auto">{children}</main>
    </div>
  )
}
