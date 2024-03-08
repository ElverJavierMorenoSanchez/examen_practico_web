import jwt from "jsonwebtoken";
import { prisma, SECRET } from "../config.js";
import bcrypt from "bcrypt";

export const signinHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const correctPassword = await bcrypt.compare(password, user.password);

    if (!correctPassword)
      return res.status(401).json({
        token: null,
        message: "Contraseña incorrecta",
      });

    const token = jwt.sign({ id: user.email }, SECRET, {
      expiresIn: 86400,
    });

    return res.json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
