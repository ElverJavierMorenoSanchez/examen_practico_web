import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { IoBookSharp } from "react-icons/io5";

const useRoutes = () => {
  const pathname = usePathname();
  const routes = useMemo(
    () => ({
      navbarOptions: [
        {
          label: "Estudiantes",
          href: "/students",
          icon: PiStudent,
          active:
            pathname === "/students" ||
            pathname === "/students/[id]" ||
            pathname === "/students/create",
        },
        {
          label: "Profesores",
          href: "/teachers",
          icon: GiTeacher,
          active: pathname === "/teachers",
        },
        {
          label: "Cursos",
          href: "/courses",
          icon: IoBookSharp,
          active: pathname === "/courses",
        },
      ],
    }),
    [pathname]
  );

  return routes;
};

export default useRoutes;
