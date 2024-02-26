import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className="flex flex-col px-4 py-4 text-2xl font-semibold pt-8 gap-6 text-center overflow-y-auto">
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
