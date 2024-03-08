import clsx from "clsx";
import Link from "next/link";

const DesktopItem = ({ href, icon: Icon, label, active, onClick }) => {
  return (
    <Link
      href={href}
      className={clsx(
        "group text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded-lg  border border-transparent    text-gray-200 hover:text-white hover:bg-gray-700 active:border-gray-600",
        active && "bg-gray-700"
      )}
    >
      <Icon
        className={clsx(
          "inline-block w-5 h-5",
          active ? "opacity-100" : "opacity-25 group-hover:opacity-100"
        )}
      />

      <span>{label}</span>
    </Link>
  );
};

export default DesktopItem;
