-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2018 at 01:35 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qltv`
--

-- --------------------------------------------------------

--
-- Table structure for table `docgia`
--

CREATE TABLE `docgia` (
  `Id` int(11) NOT NULL,
  `TenDocGia` text COLLATE utf8_unicode_ci NOT NULL,
  `DiaChi` text COLLATE utf8_unicode_ci NOT NULL,
  `NgaySinh` date NOT NULL,
  `Email` text COLLATE utf8_unicode_ci NOT NULL,
  `GioiTinh` int(1) NOT NULL,
  `NgayLapThe` date NOT NULL,
  `HanThe` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `docgia`
--

INSERT INTO `docgia` (`Id`, `TenDocGia`, `DiaChi`, `NgaySinh`, `Email`, `GioiTinh`, `NgayLapThe`) VALUES
(12, 'Phan Thị Thảo', 'Bình Thạnh', '1997-06-10', 'ptthao.itus@gmail.com', 0, '2017-03-21'),
(19, 'Phan Thị Hiền', 'smkk', '1997-05-15', 'sjsj@gmail.com', 1, '2017-04-23'),
(20, 'ưyiuw', '', '0000-00-00', '', 1, '0000-00-00'),
(22, '', '', '0000-00-00', '', 1, '0000-00-00'),
(23, '', '', '0000-00-00', '', 1, '0000-00-00'),
(24, '', '', '0000-00-00', '', 1, '0000-00-00'),
(25, '', '', '0000-00-00', '', 1, '0000-00-00'),
(26, '', '', '0000-00-00', '', 1, '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `muontra`
--

CREATE TABLE `muontra` (
  `MaDocGia` int(11) NOT NULL,
  `MaSach` int(11) NOT NULL,
  `NgayMuon` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `muontra`
--

INSERT INTO `muontra` (`MaDocGia`, `MaSach`, `NgayMuon`) VALUES
(12, 26, '2018-05-20'),
(12, 27, '2018-05-19');

-- --------------------------------------------------------

--
-- Table structure for table `nxb`
--

CREATE TABLE `nxb` (
  `Id` int(11) NOT NULL,
  `TenNXB` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `nxb`
--

INSERT INTO `nxb` (`Id`, `TenNXB`) VALUES
(28, 'NXB Giáo dục'),
(30, 'NXB Thời Đạif'),
(32, 'NXB trẻ'),
(55, 'NXB Kim Đồng'),
(56, 'sss'),
(60, 'NXshis'),
(67, 'hưhtrh');

-- --------------------------------------------------------

--
-- Table structure for table `quydinh`
--

CREATE TABLE `quydinh` (
  `Id` int(11) NOT NULL,
  `GiaTri1` int(11) DEFAULT NULL,
  `GiaTri2` int(11) DEFAULT NULL,
  `GiaTri3` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `quydinh`
--

INSERT INTO `quydinh` (`Id`, `GiaTri1`, `GiaTri2`, `GiaTri3`) VALUES
(1, 18, 35, 5),
(2, 8, 0, 0),
(4, 5, 4, 0);

-- --------------------------------------------------------

--
-- Table structure for table `sach`
--

CREATE TABLE `sach` (
  `Id` int(11) NOT NULL,
  `TenSach` text COLLATE utf8_unicode_ci NOT NULL,
  `TacGia` text COLLATE utf8_unicode_ci NOT NULL,
  `NgayNhap` date NOT NULL,
  `NamXB` int(11) NOT NULL,
  `SoLuong` int(11) NOT NULL,
  `IdTheLoai` int(11) NOT NULL,
  `IdNXB` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sach`
--

INSERT INTO `sach` (`Id`, `TenSach`, `TacGia`, `NgayNhap`, `NamXB`, `SoLuong`, `IdTheLoai`, `IdNXB`) VALUES
(23, 'aaaaaa', 'akm', '2018-08-07', 2015, 4, 1, 28),
(25, 'ưkqd', 'ưd', '2015-03-23', 2016, 0, 5, 30),
(26, 'jdhkd', 'sưdwqd', '2016-05-04', 2013, 3, 1, 28),
(27, 'áda', 'đà', '2018-05-19', 2012, 3, 1, 28);

-- --------------------------------------------------------

--
-- Table structure for table `taikhoan`
--

CREATE TABLE `taikhoan` (
  `Username` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Pass` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Quyen` int(11) NOT NULL,
  `IdThuThu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `taikhoan`
--

INSERT INTO `taikhoan` (`Username`, `Pass`, `Quyen`, `IdThuThu`) VALUES
('', '', 1, 1),
('1', '1', 1, 1),
('2', '1', 1, 2),
('6', '345', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `theloai`
--

CREATE TABLE `theloai` (
  `Id` int(11) NOT NULL,
  `TenTheLoai` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `theloai`
--

INSERT INTO `theloai` (`Id`, `TenTheLoai`) VALUES
(1, 'Tiểu Thuyết'),
(5, 'ngôn vbb'),
(6, 'gq');

-- --------------------------------------------------------

--
-- Table structure for table `thuthu`
--

CREATE TABLE `thuthu` (
  `Id` int(11) NOT NULL,
  `TenThuThu` text COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `SDT` text COLLATE utf8_unicode_ci NOT NULL,
  `NgaySinh` date NOT NULL,
  `GioiTinh` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `thuthu`
--

INSERT INTO `thuthu` (`Id`, `TenThuThu`, `Email`, `SDT`, `NgaySinh`, `GioiTinh`) VALUES
(1, 'Phan Thảo', 'ptthao.itus@gmail.com', '0964694147', '1997-06-10', 0),
(2, 'Phan hiền', 'sksl@gamil.com', '9289282', '1997-05-15', 0),
(3, 'đừ', '', '', '0000-00-00', 1),
(4, ',s,mkms', 'dskwkld@gamil.cpm', '3', '0000-00-00', 1),
(5, '', '', '', '0000-00-00', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `docgia`
--
ALTER TABLE `docgia`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `muontra`
--
ALTER TABLE `muontra`
  ADD PRIMARY KEY (`MaDocGia`,`MaSach`),
  ADD KEY `MaSach` (`MaSach`);

--
-- Indexes for table `nxb`
--
ALTER TABLE `nxb`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `quydinh`
--
ALTER TABLE `quydinh`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `sach`
--
ALTER TABLE `sach`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `IdNXB` (`IdNXB`),
  ADD KEY `IdTheLoai` (`IdTheLoai`);

--
-- Indexes for table `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`Username`),
  ADD KEY `IdThuThu` (`IdThuThu`);

--
-- Indexes for table `theloai`
--
ALTER TABLE `theloai`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `thuthu`
--
ALTER TABLE `thuthu`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `docgia`
--
ALTER TABLE `docgia`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `nxb`
--
ALTER TABLE `nxb`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `quydinh`
--
ALTER TABLE `quydinh`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sach`
--
ALTER TABLE `sach`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `theloai`
--
ALTER TABLE `theloai`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `thuthu`
--
ALTER TABLE `thuthu`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `muontra`
--
ALTER TABLE `muontra`
  ADD CONSTRAINT `muontra_ibfk_1` FOREIGN KEY (`MaDocGia`) REFERENCES `docgia` (`Id`),
  ADD CONSTRAINT `muontra_ibfk_2` FOREIGN KEY (`MaSach`) REFERENCES `sach` (`Id`);

--
-- Constraints for table `sach`
--
ALTER TABLE `sach`
  ADD CONSTRAINT `sach_ibfk_1` FOREIGN KEY (`IdNXB`) REFERENCES `nxb` (`Id`),
  ADD CONSTRAINT `sach_ibfk_2` FOREIGN KEY (`IdTheLoai`) REFERENCES `theloai` (`Id`);

--
-- Constraints for table `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD CONSTRAINT `taikhoan_ibfk_1` FOREIGN KEY (`IdThuThu`) REFERENCES `thuthu` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
