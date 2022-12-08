import { RxDashboard } from "react-icons/rx";
import { VscFiles, VscTasklist } from "react-icons/vsc";
import Link from "next/link";

export default () => {
  return (
    <div className="bg-[#060606] w-[20vw] h-[91vh] px-3 py-2">
      <ul className="items">
        <Link href="/">
          <li className="text-xl my-2 px-2 py-1 rounded-sm hover:bg-[#161616] cursor-pointer flex content-center items-center gap-4">
            <RxDashboard />
            Dashboard
          </li>
        </Link>
        <Link href="/notes">
          <li className="text-xl my-2 px-2 py-1 rounded-sm hover:bg-[#161616] cursor-pointer flex content-center items-center gap-4">
            <VscFiles />
            Notes
          </li>
        </Link>
        <Link href="/todos">
          <li className="text-xl my-2 px-2 py-1 rounded-sm hover:bg-[#161616] cursor-pointer flex content-center items-center gap-4">
            <VscTasklist />
            Todos
          </li>
        </Link>
      </ul>
    </div>
  );
};
