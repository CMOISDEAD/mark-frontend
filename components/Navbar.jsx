import Link from "next/link";
import { RxAvatar, RxEnter, RxExit } from "react-icons/rx";

export default () => {
  return (
    <div className="bg-[#060606] w-full px-5 py-3 flex flex-row justify-between content-center items-center">
      <Link href="/">
        <div className="logo text-2xl font-bold cursor-pointer">
          Markdown Doom
        </div>
      </Link>
      <div className="items inline-flex justify-between content-center items-center gap-5">
        <a
          href="#"
          className="text-gray-500 inline-flex content-center items-center justify-center gap-2 hover:text-gray-300"
        >
          <RxEnter />
          Sign In
        </a>
        <a
          href="#"
          className="text-gray-500 inline-flex content-center items-center justify-center gap-2 hover:text-gray-300"
        >
          <RxExit />
          Sign out
        </a>
        <a
          href="#"
          className="font-bold inline-flex content-center items-center justify-center gap-2"
        >
          <RxAvatar />
          User
        </a>
      </div>
    </div>
  );
};
