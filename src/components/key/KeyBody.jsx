import React, { useState } from "react";
import { TokenService } from "../../service/token";

function KeyBody({ refresh, setRefresh }) {
  const [token, setToken] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    TokenService.setSecretToken(token.trim())
    setRefresh(!refresh);
  };

  return (
    <div className="mx-auto max-w-screen text-center py-10 mb-5 items-center relative">
      <div className="overflow-hidden mx-auto max-w-screen text-center py-10  mb-5 items-center relative">
        <div className="relative w-11/12 max-w-xl p-8 bg-white shadow-xl mx-auto rounded mb-10">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              value={token}
              onChange={e => setToken(e.target.value)}
              name="company-website"
              className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              placeholder="Enter Secret Key"
            />
            <button className="uppercase mt-3 text-xl w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-400 active:bg-blue-600 font-bold transition duration-150 ease-in-out">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default KeyBody;
