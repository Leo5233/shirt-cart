export default function MainFrame({ children }) {
  return (
    <main className="site-main">
      <div className="main-container">
        {children}
      </div>
    </main>
  )
}