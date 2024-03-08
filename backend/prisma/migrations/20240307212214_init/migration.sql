-- CreateTable
CREATE TABLE `alumnos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cedula` VARCHAR(10) NULL,
    `nombre` VARCHAR(50) NULL,
    `apellidos` VARCHAR(100) NULL,
    `grupo` CHAR(1) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `alumnosexamenes` (
    `alumno_id` INTEGER NOT NULL,
    `examen_id` INTEGER NOT NULL,
    `nota` INTEGER NULL,

    INDEX `examen_id`(`examen_id`),
    PRIMARY KEY (`alumno_id`, `examen_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `alumnospracticas` (
    `alumno_id` INTEGER NOT NULL,
    `practica_id` INTEGER NOT NULL,
    `fecha` DATE NULL,
    `nota` INTEGER NULL,

    INDEX `practica_id`(`practica_id`),
    PRIMARY KEY (`alumno_id`, `practica_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `examenesteoricos` (
    `id` INTEGER NOT NULL,
    `titulo` VARCHAR(100) NULL,
    `numPreguntas` INTEGER NULL,
    `fecha` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `practicas` (
    `id` INTEGER NOT NULL,
    `titulo` VARCHAR(100) NULL,
    `dificultad` VARCHAR(10) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profesores` (
    `id` INTEGER NOT NULL,
    `cedula` VARCHAR(10) NULL,
    `nombre` VARCHAR(50) NULL,
    `apellidos` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profesoresexamenes` (
    `profesor_id` INTEGER NOT NULL,
    `examen_id` INTEGER NOT NULL,

    INDEX `examen_id`(`examen_id`),
    PRIMARY KEY (`profesor_id`, `examen_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profesorespracticas` (
    `profesor_id` INTEGER NOT NULL,
    `practica_id` INTEGER NOT NULL,
    `fecha` DATE NULL,

    INDEX `practica_id`(`practica_id`),
    PRIMARY KEY (`profesor_id`, `practica_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `alumnosexamenes` ADD CONSTRAINT `alumnosexamenes_ibfk_1` FOREIGN KEY (`alumno_id`) REFERENCES `alumnos`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `alumnosexamenes` ADD CONSTRAINT `alumnosexamenes_ibfk_2` FOREIGN KEY (`examen_id`) REFERENCES `examenesteoricos`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `alumnospracticas` ADD CONSTRAINT `alumnospracticas_ibfk_1` FOREIGN KEY (`alumno_id`) REFERENCES `alumnos`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `alumnospracticas` ADD CONSTRAINT `alumnospracticas_ibfk_2` FOREIGN KEY (`practica_id`) REFERENCES `practicas`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `profesoresexamenes` ADD CONSTRAINT `profesoresexamenes_ibfk_1` FOREIGN KEY (`profesor_id`) REFERENCES `profesores`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `profesoresexamenes` ADD CONSTRAINT `profesoresexamenes_ibfk_2` FOREIGN KEY (`examen_id`) REFERENCES `examenesteoricos`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `profesorespracticas` ADD CONSTRAINT `profesorespracticas_ibfk_1` FOREIGN KEY (`profesor_id`) REFERENCES `profesores`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `profesorespracticas` ADD CONSTRAINT `profesorespracticas_ibfk_2` FOREIGN KEY (`practica_id`) REFERENCES `practicas`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
