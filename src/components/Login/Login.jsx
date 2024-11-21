// import React from "react";

// let login = () => {
//   return (
//     <div className="bg-gray-100 p-4 rounded-lg shadow-md  sm:w-96 mx-auto mt-36 mb-12">
//       <h2 className="text-3xl font-bold  mb-4 text-center">Login</h2>
//       <form>
//         <div className="mb-4">
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
//             type="Email"
//             placeholder="Email "
//           />
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
//             type="input"
//             placeholder="Enter your name"
//           />

//           <div className="flex  justify-center">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
//               type="submit"
//             >
//               Login
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default login;

import React, { useState } from "react";
import { useUser } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const { setUser } = useUser();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    if (name && email) {
      setUser({ name, email }); // Set user details in context
      navigate("/user"); // Redirect to the User page
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md sm:w-96 mx-auto mt-36 mb-12">
      <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
