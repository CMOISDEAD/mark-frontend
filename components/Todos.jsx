import { useState } from "react";

const Task = () => {
  const [status, setStatus] = useState(false);

  return (
    <div className="bg-[#161616bf] px-4 py-3 rounded-md flex justify-start content-center items-center gap-4">
      <input
        type="checkbox"
        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 ring-2 bg-gray-700 border-gray-600"
        value={status}
        onChange={() => {
          setStatus(!status);
        }}
      />
      <div className={`info ${status && "line-through italic"}`}>
        <h5 className="font-bold">Finish this app</h5>
        <p className="text-sm">Finish all the features of this application.</p>
      </div>
    </div>
  );
};

export default () => {
  return (
    <div>
      <h3 className="text-xl font-bold text-center">Todo List</h3>
      <div className="text-sm text-gray-300 text-center mb-3">
        Several collection of <span className="font-bold underline">todos</span>{" "}
        with no really value.
      </div>
      <div className="grid grid-cols-3 grid-flow-row gap-2">
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};
