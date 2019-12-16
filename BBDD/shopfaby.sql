-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2019 a las 19:51:18
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `shopfaby`
--
CREATE DATABASE IF NOT EXISTS `shopfaby` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
USE `shopfaby`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buy`
--

DROP TABLE IF EXISTS `buy`;
CREATE TABLE `buy` (
  `ID` int(11) NOT NULL,
  `ID_U` int(11) NOT NULL,
  `ID_P` int(11) NOT NULL,
  `CANTIDAD` int(11) NOT NULL,
  `PRECIO` int(11) NOT NULL,
  `COD_COMPRA` text COLLATE utf8mb4_bin NOT NULL,
  `FECHA` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `produc`
--

DROP TABLE IF EXISTS `produc`;
CREATE TABLE `produc` (
  `ID` int(11) NOT NULL,
  `NOMBRE` varchar(40) COLLATE utf8mb4_bin NOT NULL,
  `PRECIO` int(11) NOT NULL,
  `CATEGORIA` varchar(40) COLLATE utf8mb4_bin NOT NULL,
  `IMG` text COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Volcado de datos para la tabla `produc`
--

INSERT INTO `produc` (`ID`, `NOMBRE`, `PRECIO`, `CATEGORIA`, `IMG`) VALUES
(1, 'Vestido nueva Colección', 25, 'vestidos', '1.jpg'),
(3, 'Camisa nueva Colección', 20, 'camisas', '1.jpg'),
(5, 'Reloj nueva Colección', 100, 'relojes', '1.jpg'),
(6, 'Zapato nueva Colección', 40, 'zapatos', '1.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `EMAIL` varchar(40) COLLATE utf8mb4_bin NOT NULL,
  `PASSWORD` text COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`ID`, `EMAIL`, `PASSWORD`) VALUES
(8, 'proyecWeb2019@gmail.com', 'ef19e030b4c0a6daf1a1404665d3949c74259235b1f165a03dc6d05b0340bf9e4309a4f6504a7cfbf8a8c3fd2ade28f0daf35ad0174602144e1ca0b7061bb217');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `buy`
--
ALTER TABLE `buy`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `USUARIO` (`ID_U`),
  ADD KEY `PRODUCTO` (`ID_P`);

--
-- Indices de la tabla `produc`
--
ALTER TABLE `produc`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `buy`
--
ALTER TABLE `buy`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `produc`
--
ALTER TABLE `produc`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
