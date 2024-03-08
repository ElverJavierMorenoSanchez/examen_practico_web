import jwt from "jsonwebtoken";
import { SECRET, prisma } from "../config.js";

export const verificarToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  console.log(token);

  if (!token) return res.status(403).json({ message: "No autorizado" });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;

    const user = await prisma.usuario.findUnique({
      where: {
        email: req.userId,
      },
    });
    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "No autorizado!" });
  }
};

export const isAdministrator = async (req, res, next) => {
  try {
    const user = await prisma.usuario.findUnique({
      where: {
        email: req.userId,
      },
      include: {
        rol: {
          select: {
            tipo: true,
          },
        },
      },
    });

    if (user.rol.tipo === "administrador") {
      next();
      return;
    }
    return res.status(403).json({ message: "Require usuario administrador!" });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
