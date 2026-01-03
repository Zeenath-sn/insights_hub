import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <div className="bg-[#F1F3E0] shadow-md px-4 py-2 pl-46 flex justify-between items-center fixed w-full top-0">
      <div className="ml-auto">
        <UserMenu />
      </div>
    </div>
  );
}
