// import { Outlet } from "react-router-dom";

// function AuthLayout() {
//   return (
//     <div className="flex min-h-screen w-full">
//       <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
//         <div className="max-w-md space-y-6 text-center text-primary-foreground">
//           <h1 className="text-4xl font-extrabold tracking-tight">
//             Welcome to Trendz
//           </h1>
//         </div>
//       </div>
//       <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default AuthLayout;
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Section with Background Image */}
      <div className="hidden lg:flex w-1/2 relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://i.pinimg.com/736x/b6/75/9e/b6759e4d83595415a6604ab382b22479.jpg')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-12 text-center text-white">
          <h1 className="text-5xl font-bold tracking-tight">
            Elevate Your Style with <span className="text-yellow-400">Trendz</span>
          </h1>
          <p className="text-lg font-light mt-4">
            Discover the latest fashion trends with premium fabrics and designs.
          </p>
        </div>
      </div>

      {/* Right Section with Authentication Forms */}
      <div className="flex flex-1 items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8 bg-black/50"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/abstract-blur-shopping-mall_1203-8481.jpg')",
      }}>
        <div className="w-full max-w-md bg-slate-300 shadow-lg p-8 rounded-lg"
         >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
