import Nav from "../ui/Nav";
import Social from "../ui/Social";

function Sidebar() {
  return (
    <div className="bg-stone-800 text-stone-200 h-screen pt-8 pb-6 fixed flex flex-col justify-between">
      <br />
      <br />
      <br />
      <br />

      <Nav />
      <div className="mt-auto">
        <Social />
      </div>
    </div>
  );
}

export default Sidebar;
