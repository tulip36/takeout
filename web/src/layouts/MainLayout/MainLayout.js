const MainLayout = ({ children }) => {
  return (
    <>
      <div>
        <p>This is a header</p>
        {children}
      </div>
    </>
  )
}

export default MainLayout
