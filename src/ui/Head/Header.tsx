import {
  CameraIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

export function Header() {
  return (
    <header className="xl:hidden px-4 py-2 flex items-center space-x-4 bg-primary-500">
      <div>
        <UserCircleIcon className="text-white w-6 h-6" />
      </div>
      <div className="w-full">
        <div className="flex justify-center items-center text-gray-300 space-x-1">
          <SearchIcon className="w-5 h-4" />
          <span>Rechercher</span>
        </div>
        <div className="border-b border-gray-200" />
      </div>
      <div>
        <CameraIcon className="w-7 h-7 text-white" />
      </div>
    </header>
  );
}
