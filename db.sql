-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: flowerstoredb
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orders_table`
--

DROP TABLE IF EXISTS `orders_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders_table` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_table`
--

LOCK TABLES `orders_table` WRITE;
/*!40000 ALTER TABLE `orders_table` DISABLE KEYS */;
INSERT INTO `orders_table` VALUES (1,11,2),(2,13,2),(3,15,2),(4,17,2),(5,16,2),(6,12,2),(7,10,2),(8,8,2),(9,6,2),(10,4,1),(11,6,1),(12,8,1),(13,10,1),(14,12,1),(15,16,1),(16,5,1),(17,7,1),(18,4,3),(19,5,3),(20,6,3),(21,7,3),(22,8,3),(23,10,3),(24,11,3),(25,12,3),(26,13,3),(27,15,3);
/*!40000 ALTER TABLE `orders_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_table`
--

DROP TABLE IF EXISTS `products_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_table` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int NOT NULL,
  `price` decimal(10,2) DEFAULT '0.00',
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_table`
--

LOCK TABLES `products_table` WRITE;
/*!40000 ALTER TABLE `products_table` DISABLE KEYS */;
INSERT INTO `products_table` VALUES (4,'erwggggg','mjdias jdioasjd',3,200.00,'2023-06-30 18:43:45','2023-07-01 06:02:51','Inactive'),(5,'lolololo','gjriohgsodhg',8,32.00,'2023-06-30 18:45:09','2023-07-01 06:15:25','Inactive'),(6,'tinapay','gardenia',9,200.50,'2023-06-30 18:45:28','2023-07-01 05:00:55','Active'),(7,'zesto','malamig',3,0.00,'2023-06-30 20:24:49','2023-06-30 20:24:49','Active'),(8,'enjoy','vape',2,500.00,'2023-06-30 20:25:16','2023-07-01 06:02:37','Inactive'),(10,'ispaghetti','pababa at pataas',54,894.00,'2023-06-30 23:09:47','2023-06-30 23:09:47','Active'),(11,'popcorn','cheddar cheese',76,52.00,'2023-06-30 23:17:24','2023-06-30 23:17:24','Active'),(12,'milo','everyday',43,756.00,'2023-07-01 00:25:29','2023-07-01 00:25:29','Active'),(13,'sberry','pink',33,653.00,'2023-07-01 00:25:52','2023-07-01 00:25:52','Active'),(15,'lemonade','blue lemonade with love',14,44.99,'2023-07-01 05:10:06','2023-07-01 06:05:19','Inactive'),(16,'lasagna','lasagna from microwave only',1,899.99,'2023-07-01 06:14:21','2023-07-01 06:14:21','Active'),(17,'ribs','ribs but mostly bones',23,288.76,'2023-07-01 06:15:03','2023-07-01 06:15:03','Active');
/*!40000 ALTER TABLE `products_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_table`
--

DROP TABLE IF EXISTS `users_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_table` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `mobile_number` varchar(20) DEFAULT NULL,
  `address` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_table`
--

LOCK TABLES `users_table` WRITE;
/*!40000 ALTER TABLE `users_table` DISABLE KEYS */;
INSERT INTO `users_table` VALUES (1,'John','Doe','johndoe@example.com','1234567890','123 Main St, City','2023-06-30 20:57:43','2023-06-30 20:57:43','Active'),(2,'Jane','Smith','janesmith@example.com','9876543210','456 Elm St, City','2023-06-30 20:57:43','2023-06-30 20:57:43','Active'),(3,'Alice','Johnson','alicejohnson@gmail.com','5555555555','789 Oak St, City','2023-06-30 20:57:43','2023-06-30 20:57:43','Inative');
/*!40000 ALTER TABLE `users_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-02  9:57:13
