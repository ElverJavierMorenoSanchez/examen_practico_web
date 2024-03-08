import { prisma } from "../config.js";
import bcrypt from "bcrypt";

export const postStudent = async (req, res) => {
  try {
    const { cedula, nombre, apellidos, grupo } = req.body;

    const newStudent = await prisma.alumnos.create({
      data: {
        cedula,
        nombre,
        apellidos,
        grupo,
      },
    });

    return res.json(newStudent);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await prisma.alumnos.findMany();
    return res.json(students);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await prisma.alumnos.findUnique({
      where: { id: parseInt(id) },
    });
    return res.json(student);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const putStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { cedula, nombre, apellidos, grupo } = req.body;
    const student = await prisma.alumnos.update({
      where: { id: parseInt(id) },
      data: {
        cedula,
        nombre,
        apellidos,
        grupo,
      },
    });
    return res.json(student);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.alumnos.delete({
      where: { id: parseInt(id) },
    });
    return res.json({ message: "Alumno eliminado" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
