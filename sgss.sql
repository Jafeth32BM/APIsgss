-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-10-2021 a las 22:17:42
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sgss`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `noregistro` varchar(256) NOT NULL,
  `titulo` varchar(256) DEFAULT NULL,
  `observacion` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentario`
--

INSERT INTO `comentario` (`noregistro`, `titulo`, `observacion`) VALUES
('15EIT0010J-20-1-N-NC', '', ''),
('15EIT0010J-20-2-N-NC', '', ''),
('15EIT0010J-20-3-N-NC', '', ''),
('15EIT0010J-20-4-N-NC', '', ''),
('15EIT0010J-20-5-N-NC', '', ''),
('98765432112', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `noregistro` varchar(256) NOT NULL,
  `empresa` varchar(256) DEFAULT NULL,
  `direccion` varchar(256) DEFAULT NULL,
  `municipio` varchar(256) DEFAULT NULL,
  `sector` varchar(256) DEFAULT NULL,
  `asesorext` varchar(256) DEFAULT NULL,
  `puesto` varchar(250) NOT NULL,
  `horario` varchar(256) DEFAULT NULL,
  `nomprograma` varchar(256) DEFAULT NULL,
  `apoyoecon` tinyint(1) DEFAULT NULL,
  `monto` int(11) DEFAULT NULL,
  `estimulo` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`noregistro`, `empresa`, `direccion`, `municipio`, `sector`, `asesorext`, `puesto`, `horario`, `nomprograma`, `apoyoecon`, `monto`, `estimulo`) VALUES
('15EIT0010J-20-1-N-NC', 'municipio chalco', 'chalco centro S/N', 'chalco', 'publico', 'lic. jesus de hinojosa', 'supervisor1', 'lunes a viernes 9:00am a 1:00pm', 'privado', 0, NULL, 'ninguno'),
('15EIT0010J-20-2-N-NC', 'cocacola sa de cv', 'parque industrial de chalco, chalco centro', 'chalco', 'privado', 'lic. monica munjica', 'supervisor2', 'lunes a viernes 9:00am a 1:00pm', 'cocacola', 1, 200, 'semanal'),
('15EIT0010J-20-3-N-NC', 'cafe blanco y negro', 'parque industrial de chalco, chalco centro', 'chalco', 'privado', 'lic. manuel contreras', 'supervisor3', 'lunes a viernes 9:00am a 1:00pm', 'privado', 1, 250, 'semanal'),
('15EIT0010J-20-4-N-NC', 'grupo bimbo sa de cv', 'barrio la conchita, chalco centro', 'chalco', 'privado', 'lic. pedro sola', 'supervisor4', 'lunes a viernes 9:00am a 1:00pm', 'bimbo', 0, NULL, 'ninguno'),
('15EIT0010J-20-5-N-NC', 'tecnologico de estudios superiores de chalco', 'la candelaria, tlapala', 'chalco', 'publico', 'lic. sandra vargas morales', 'supervisor5', 'lunes a viernes 9:00am a 1:00pm', 'publico', 0, NULL, 'ninguno'),
('98765432112', NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `escolar`
--

CREATE TABLE `escolar` (
  `noregistro` varchar(256) NOT NULL,
  `matricula` int(11) DEFAULT NULL,
  `carrera` varchar(250) DEFAULT NULL,
  `siss` tinyint(1) DEFAULT NULL,
  `pinicio` varchar(256) DEFAULT NULL,
  `pfin` varchar(256) DEFAULT NULL,
  `promedio` double DEFAULT NULL,
  `porcentaje` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `escolar`
--

INSERT INTO `escolar` (`noregistro`, `matricula`, `carrera`, `siss`, `pinicio`, `pfin`, `promedio`, `porcentaje`) VALUES
('15EIT0010J-20-1-N-NC', 201614001, 'ingenieria en sistemas computacionales', 0, '2021-03-08', '2021-09-08', 85.4, 70.3),
('15EIT0010J-20-2-N-NC', 201614002, 'ingenieria industrial', 1, '2021-03-08', '2021-09-08', 86.7, 71.2),
('15EIT0010J-20-3-N-NC', 201614003, 'ingenieria informatica', 1, '2021-03-08', '2021-09-08', 84.1, 69.9),
('15EIT0010J-20-4-N-NC', 201614004, 'ingenieria electromecanica', 1, '2021-03-08', '2021-09-08', 80, 70),
('15EIT0010J-20-5-N-NC', 201614005, 'ingenieria informatica', 0, '2021-03-08', '2021-09-08', 84.1, 69.9),
('98765432112', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logueo`
--

CREATE TABLE `logueo` (
  `noregistro` varchar(256) NOT NULL,
  `primerlogueo` tinyint(1) DEFAULT NULL,
  `passcambiada` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `logueo`
--

INSERT INTO `logueo` (`noregistro`, `primerlogueo`, `passcambiada`) VALUES
('98765432112', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pendiente`
--

CREATE TABLE `pendiente` (
  `noregistro` varchar(256) NOT NULL,
  `historial` varchar(150) DEFAULT NULL,
  `curp` varchar(150) DEFAULT NULL,
  `actnacim` varchar(150) DEFAULT NULL,
  `cargacadem` varchar(150) DEFAULT NULL,
  `conscredit` varchar(150) DEFAULT NULL,
  `solservsoci` varchar(150) DEFAULT NULL,
  `imss` varchar(150) DEFAULT NULL,
  `ruta` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pendiente`
--

INSERT INTO `pendiente` (`noregistro`, `historial`, `curp`, `actnacim`, `cargacadem`, `conscredit`, `solservsoci`, `imss`, `ruta`) VALUES
('15EIT0010J-20-1-N-NC', '1', '0', '1', '0', '1', '0', '1', ''),
('15EIT0010J-20-2-N-NC', '0', '1', '0', '1', '0', '1', '0', ''),
('15EIT0010J-20-3-N-NC', '0', '0', '0', '0', '0', '0', '0', ''),
('15EIT0010J-20-4-N-NC', '1', '1', '1', '1', '1', '1', '1', ''),
('15EIT0010J-20-5-N-NC', '1', '1', '1', '0', '0', '0', '0', ''),
('98765432112', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `noregistro` varchar(256) NOT NULL,
  `curp` varchar(20) DEFAULT NULL,
  `contrasena` varchar(255) CHARACTER SET latin1 NOT NULL,
  `nuevacontra` varchar(255) CHARACTER SET latin1 NOT NULL,
  `apaterno` varchar(150) DEFAULT NULL,
  `amaterno` varchar(150) DEFAULT NULL,
  `nombres` varchar(150) DEFAULT NULL,
  `sexo` varchar(25) DEFAULT NULL,
  `correo` varchar(150) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `tipo` varchar(150) DEFAULT NULL,
  `fecharegistro` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`noregistro`, `curp`, `contrasena`, `nuevacontra`, `apaterno`, `amaterno`, `nombres`, `sexo`, `correo`, `telefono`, `tipo`, `fecharegistro`) VALUES
('15EIT0010J-20-1-N-NC', 'asde124506bsnrhsn8', '$2a$08$ya1gEzN.gNka2VBVFhMnqeQyf099OatjMWQYiL9ZxutQl5NZCFOvS', '', 'martinez', 'flores', 'jose juan', 'masculino', 'jose_mf@tesch.edu.mx', '5512345678', 'estudiante', '2021-03-19'),
('15EIT0010J-20-2-N-NC', 'asqwdc215487dfsr7', '$2a$08$ya1gEzN.gNka2VBVFhMnqeQyf099OatjMWQYiL9ZxutQl5NZCFOvS', '', 'magon', 'rodriguez', 'maria pancha', 'femenino', 'maria_mr@tesch.edu.mx', '5598765432', 'estudiante', '2021-03-19'),
('15EIT0010J-20-3-N-NC', 'okes895615xadsfrs9', '$2a$08$ya1gEzN.gNka2VBVFhMnqeQyf099OatjMWQYiL9ZxutQl5NZCFOvS', '', 'lopez', 'anguna', 'jose luis', 'masculino', 'jose_la@tesch.edu.mx', '5614598741', 'estudiante', '2021-03-19'),
('15EIT0010J-20-4-N-NC', 'uher658457dwzxase0', '$2a$08$ya1gEzN.gNka2VBVFhMnqeQyf099OatjMWQYiL9ZxutQl5NZCFOvS', '', 'soriana', 'tunes', 'guadalupe victoria', 'femenino', 'lupe_st@tesch.edu.mx', '5678542162', 'estudiante', '2021-03-19'),
('15EIT0010J-20-5-N-NC', 'wesa571402swascrs1', '$2a$08$ya1gEzN.gNka2VBVFhMnqeQyf099OatjMWQYiL9ZxutQl5NZCFOvS', '', 'de la cruz', 'antunes', 'hector', 'masculino', 'hector_dlca@tesch.edu.mx', '5521306584', 'estudiante', '2021-03-19'),
('15EIT0010J-XX-A1-N-NC', 'vams840515mmctdss5', '$2a$08$ya1gEzN.gNka2VBVFhMnqeQyf099OatjMWQYiL9ZxutQl5NZCFOvS', '', 'vargas', 'morales', 'sandra', 'femenino', 'sandra_vm@tesch.edu.mx', '5500000000', 'admin', '2021-03-19'),
('15EIT0010J-XX-A2-N-NC', 'digj950318hmcstdf7', '$2a$08$ya1gEzN.gNka2VBVFhMnqeQyf099OatjMWQYiL9ZxutQl5NZCFOvS', '', 'diaz', 'guevara', 'jonas abimael', 'masculino', 'jonas_dg@tesch.edu.mx', '5500000000', 'admin', '2021-03-19'),
('15EIT0010J-XX-A3-N-NC', 'bamj960725hdfdrs08', '$2a$08$ya1gEzN.gNka2VBVFhMnqeQyf099OatjMWQYiL9ZxutQl5NZCFOvS', '', 'badillo', 'martinez', 'josephan jafeth', 'masculino', 'jafeth_bm@tesch.edu.mx', '5500000000', 'admin', '2021-03-19'),
('98765432112', 'qwertyuiop', '$2a$08$ICHPCZXSVIfJZ.earETEe.5K1SJb/Je64aTsLWB63lF.SnFitnIL2', '', 'juarez', 'penales', 'alejandro', 'masculino', 'alejandro_jp@tesch.edu.mx', '0', 'estudiante', '2021-10-01 15:15:12');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`noregistro`);

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`noregistro`);

--
-- Indices de la tabla `escolar`
--
ALTER TABLE `escolar`
  ADD PRIMARY KEY (`noregistro`);

--
-- Indices de la tabla `logueo`
--
ALTER TABLE `logueo`
  ADD PRIMARY KEY (`noregistro`);

--
-- Indices de la tabla `pendiente`
--
ALTER TABLE `pendiente`
  ADD PRIMARY KEY (`noregistro`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`noregistro`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`noregistro`) REFERENCES `usuario` (`noregistro`);

--
-- Filtros para la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD CONSTRAINT `empresa_ibfk_1` FOREIGN KEY (`noregistro`) REFERENCES `usuario` (`noregistro`);

--
-- Filtros para la tabla `escolar`
--
ALTER TABLE `escolar`
  ADD CONSTRAINT `escolar_ibfk_1` FOREIGN KEY (`noregistro`) REFERENCES `usuario` (`noregistro`);

--
-- Filtros para la tabla `logueo`
--
ALTER TABLE `logueo`
  ADD CONSTRAINT `logueo_ibfk_1` FOREIGN KEY (`noregistro`) REFERENCES `usuario` (`noregistro`);

--
-- Filtros para la tabla `pendiente`
--
ALTER TABLE `pendiente`
  ADD CONSTRAINT `pendiente_ibfk_1` FOREIGN KEY (`noregistro`) REFERENCES `usuario` (`noregistro`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
