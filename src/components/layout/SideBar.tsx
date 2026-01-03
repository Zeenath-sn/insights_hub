// import { Divider } from "@mui/material";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="bg-[#778873] text-white px-4 py-6 h-full fixed w-42 top-0 left-0 flex flex-col gap-2 rounded-sm z-10 shadow-md">
      <div>
        <h4>InsightHub</h4>
      </div>
      {/* <Divider /> */}
      <nav className="w-full px-2 py-1 rounded-md hover:bg-[#A1BC98] ">
        <Link href={"/"} className="w-full">
          Dashboard
        </Link>
      </nav>
      <nav className="w-full px-2 py-1 rounded-md hover:bg-[#A1BC98] ">
        <Link href={"/analytics"}>Analytics</Link>
      </nav>
      <nav className="w-full px-2 py-1 rounded-md hover:bg-[#A1BC98] ">
        <Link href={"/users"}>Users</Link>
      </nav>
      <nav className="mt-auto w-full px-2 py-1 rounded-md hover:bg-[#A1BC98]">
        <Link href={"/settings"}>Settings</Link>
      </nav>
    </div>
  );
}
