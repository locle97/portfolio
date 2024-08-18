import './App.css'

function NavBar() {
  return (
    <>
      <div className="flex flex-col w-1/3 h-full bg-white justify-start items-center py-36 gap-16">
        <Avatar />
        <NavItems />
        <Footer />
      </div>
    </>
  )
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer text-gray-500 text-center">
        <div className="copyright">
          <p>Copyright © {year} by <span className="text-black font-bold">Loc Le</span></p>
          <p>All rights are reserved</p>
        </div>
        <div className="social">
        </div>
      </div>
    </>
  )
}

function NavItems() {
  return (
    <>
      <ul className="flex flex-col items-center gap-4">
        <li className="navitem text-black">
          <a href="#" className="text-black">Home</a>
        </li>
        <li className="navitem text-gray-500">
          <a href="#">About</a>
        </li>
        <li className="navitem text-gray-500">
          <a href="#">Services</a>
        </li>
        <li className="navitem text-gray-500">
          <a href="#">Portfolio</a>
        </li>
        <li className="navitem text-gray-500">
          <a href="#">Contact</a>
        </li>
      </ul >
    </>
  )
}

function Avatar() {
  return <div className="avatar w-1/3">
    <img className="rounded-full w-full aspect-square"
      src="https://picsum.photos/500"
      alt="avatar" />
  </div>
}

function Content() {
  return (
    <>
      <div className="flex w-full h-full bg-white justify-center items">
        Testing
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <div className="flex w-screen h-screen bg-gray-200 justify-center items-center">
        <div className="flex gap-8 w-[80%] h-[80%]">
          <NavBar />
          <Content />
        </div>
      </div>
    </>
  )
}

export default App
