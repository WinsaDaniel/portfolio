import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import Main from "../components/Main";
function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen ">
      <div className="bg-stone-800 text-center text-stone-200  text-3xl   w-full  ">
        <Header />
      </div>
      <div className="grid grid-cols-[1fr_4fr]">
        <div className="h-screen ">
          <Sidebar />
        </div>
        <main className=" text-stone-800 ">
          <Main />
        </main>
      </div>
    </div>
  );
}

export default App;

// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
// import Main from "../components/Main";

// function App() {
//   return (
//     <div className="flex flex-col h-screen ">
//       <div>
//         <Header />
//       </div>
//       <div className="flex flex-grow ">
//         <div className="w-1/3  ">
//           <Sidebar />
//         </div>
//         <div className="w-2/3    ">
//           <Main />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
