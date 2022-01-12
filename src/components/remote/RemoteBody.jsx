import React from "react";
import { broker } from "../../service/post";
import { TokenService } from "../../service/token";

function RemoteBody({ refresh, setRefresh }) {
  const logout = () => {
    TokenService.removeSecretToken();
    setRefresh(!refresh);
  };

  const sendSignal = async (data) => {
    try {
      await broker(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="text-right">
        <button
          onClick={() => logout()}
          className="bg-blue-700 hover:bg-blue-dark text-white font-bold p-3 rounded-full shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
      <div className="mx-auto max-w-screen text-center py-10 mb-5 items-center relative">
        <div className="overflow-hidden mx-auto max-w-screen text-center py-10  mb-5 items-center relative">
          <div className="relative w-11/12 max-w-xl p-8 bg-white shadow-xl mx-auto rounded mb-10">
            <div className="m-3 grid grid-rows-3 grid-flow-col gap-4">
              <div className="row-span-3">
                <button
                onClick={() => sendSignal({
                    "type":"volume",
                    "value":"x"
                })}
                className="bg-blue-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-lg shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="col-span-2">
                <button
                onClick={() => sendSignal({
                    "type":"volume",
                    "value":"+"
                })}
                className="bg-blue-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-lg shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
              <div className="row-span-2 col-span-2">
                <button
                onClick={() => sendSignal({
                    "type":"volume",
                    "value":"-"
                })}
                className="bg-blue-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-lg shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemoteBody;
