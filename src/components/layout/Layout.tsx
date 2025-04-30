type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 md:px-6 lg:px-8 pt-4">{children}</main>
    </div>
  )
}
