import Nav from "../ui/Nav";
import Social from "../ui/Social";

function Sidebar() {
  return (
    <div className="bg-stone-800 text-stone-200 h-screen pt-8 flex flex-col justify-between pb-6 fixed  ">
      <Nav />
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}

      <Social />
    </div>
  );
}

export default Sidebar;
