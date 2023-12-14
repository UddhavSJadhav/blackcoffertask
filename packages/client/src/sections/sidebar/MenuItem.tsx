import { Link } from "react-router-dom";

type MenuItemProps = {
  text: string;
  path: string;
  isActive: boolean;
};

const MenuItem = ({ text, path, isActive }: MenuItemProps) => {
  return (
    <li>
      <Link
        to={path}
        className={`flex items-center p-2 rounded-lg text-white ${
          isActive ? "bg-gray-800 shadow-xl" : ""
        } hover:bg-gray-700 group transition-colors`}
      >
        <svg
          className={`flex-shrink-0 w-5 h-5 transition duration-75 text-gray-400 ${
            isActive ? "text-white" : ""
          } group-hover:text-white`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 18"
        >
          <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
        </svg>
        <span className="flex-1 ml-3 whitespace-nowrap">{text}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
