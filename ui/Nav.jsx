import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className="flex flex-col  sm:py-0 sm:px-0 sm:text-xs md:text-sm lg:text-lg pt-8 gap-6 sm:gap-3 text-center sm:text-left ">
      <Link
        to="About"
        spy={true}
        smooth={true}
        className="flex items-center"
        style={{ cursor: "pointer" }}
      >
        About
      </Link>

      <Link
        to="Skills"
        spy={true}
        smooth={true}
        offset={10}
        className="flex items-center"
        style={{ cursor: "pointer" }}
      >
        Skills
      </Link>
      <Link
        to="Cv"
        spy={true}
        smooth={true}
        className="flex items-center text-2xl font-semibold"
        style={{ cursor: "pointer" }}
      >
        Cv
      </Link>
      <Link
        to="Works"
        spy={true}
        smooth={true}
        className="flex items-center"
        style={{ cursor: "pointer" }}
      >
        Works
      </Link>
      <Link
        to="Contact"
        spy={true}
        smooth={true}
        className="flex items-center"
        style={{ cursor: "pointer" }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Nav;
