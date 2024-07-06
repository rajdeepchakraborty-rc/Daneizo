import LinksNavbar from "./Navbar Components/NavbarLinks"
import LogoTitleNavbar from "./Navbar Components/NavbarLogoTitle"
import SearchNavbar from "./Navbar Components/NavbarSearch"

const Navbar = () => {
  return (
    <section className="bg-gradient-to-b from-[#28354F] to-[#040312] flex justify-center items-center">
      <nav className="w-[80%] h-[80px] flex justify-around items-center gap-10">
        <div className="flex gap-20 items-center p-4">
            <div>
              <LogoTitleNavbar />
            </div>
            <div>
              <SearchNavbar />
            </div>
        </div>
        <div>
            <LinksNavbar />
        </div>
      </nav>
    </section>
  )
}

export default Navbar