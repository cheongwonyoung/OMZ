CREATE DATABASE  IF NOT EXISTS `omz` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `omz`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: j8a705.p.ssafy.io    Database: omz
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.20.04.2

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
-- Table structure for table `bgm`
--

DROP TABLE IF EXISTS `bgm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bgm` (
  `bgm_id` bigint NOT NULL AUTO_INCREMENT,
  `singer` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `title` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mini_room_id` bigint DEFAULT NULL,
  PRIMARY KEY (`bgm_id`),
  KEY `FKekf1psfosa26cf26yo2xip9r2` (`mini_room_id`),
  CONSTRAINT `FKekf1psfosa26cf26yo2xip9r2` FOREIGN KEY (`mini_room_id`) REFERENCES `mini_room` (`mini_room_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bgm`
--

LOCK TABLES `bgm` WRITE;
/*!40000 ALTER TABLE `bgm` DISABLE KEYS */;
INSERT INTO `bgm` VALUES (1,'허성현 (Huh)','hrDVpIJYhgg',1),(2,'김동률','KhW4K6yPgzQ',2),(3,'태연 (TAEYEON)','TVUqLBRQom8',3),(4,'영탁','aEiBKM5xsXU',4),(5,'뉴진스','11cta61wi0g',5),(6,'뉴진스','11cta61wi0g',6),(7,'뉴진스','11cta61wi0g',7),(8,'카라','pHtDaScwNjU',8),(9,'뉴진스','11cta61wi0g',9),(10,'아이유','gJtNx3P02Z4',10),(11,'','wQJI98Cq21Y',11),(12,'뉴진스','11cta61wi0g',12),(13,'원더걸스','lmun5PO54VE',13),(14,'뉴진스','11cta61wi0g',14),(15,'뉴진스','11cta61wi0g',15);
/*!40000 ALTER TABLE `bgm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board`
--

DROP TABLE IF EXISTS `board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board` (
  `board_id` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(140) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `file` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `is_deleted` bit(1) NOT NULL DEFAULT b'0',
  `modified_time` datetime(6) DEFAULT NULL,
  `registered_time` datetime(6) DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  PRIMARY KEY (`board_id`),
  KEY `FKsds8ox89wwf6aihinar49rmfy` (`member_id`),
  CONSTRAINT `FKsds8ox89wwf6aihinar49rmfy` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` VALUES (1,'놐놐 ',NULL,_binary '\0','2023-04-06 12:13:15.691098','2023-04-06 12:13:15.691107',3),(2,'ㅋㅋ','609e2caf-396c-4edc-9b91-0f3b0c9b225bE4C8E285-FB4F-4790-B30C-9F4A875D4CB7.jpeg',_binary '\0','2023-04-06 12:22:47.554795','2023-04-06 12:22:47.554803',4),(3,'잘보고갑미다','00ab4032-63ea-49eb-b95a-48351b3c4443KakaoTalk_20230405_110939539.png',_binary '\0','2023-04-06 12:39:40.615459','2023-04-06 12:39:40.615467',6),(4,'그냥 하염없이 눈물이 나 ~~~ 그냥 하염없이 서글퍼져~~~ ','5f21f577-0cee-4a85-9c3c-ee30980c46d4다운로드 (1).jpg',_binary '\0','2023-04-06 14:07:25.163790','2023-04-06 14:07:25.163798',3),(5,'엄망 친구 개롭혀쏭? ','7b27fd71-2d83-4189-b691-23b8be76d58eD6BC3A71-8E9B-4F7F-BD1D-5D1A37649574.jpeg',_binary '\0','2023-04-06 14:28:46.910752','2023-04-06 14:28:46.910761',9),(6,'산책하는 히동이 대공개\n불펌 금지!! ❌','5447f231-b79c-4da0-b548-796aee48b74cD6041E2A-D7A0-42B2-BA79-69F62A5E8D8C.jpeg',_binary '\0','2023-04-06 14:29:16.322443','2023-04-06 14:29:16.322452',9),(7,'당신의 인생에 다시는 ... ',NULL,_binary '\0','2023-04-06 15:41:33.376413','2023-04-06 15:41:33.376428',11),(8,'테투리쭈 할 싸람',NULL,_binary '\0','2023-04-06 15:41:47.162030','2023-04-06 15:41:47.162040',11),(9,'우짤 우잘 요    ',NULL,_binary '','2023-04-06 15:42:42.578203','2023-04-06 15:42:42.578212',3),(10,'나 발표 너무 떨려..',NULL,_binary '\0','2023-04-06 20:50:14.674210','2023-04-06 20:50:14.674219',1),(11,'너무 잼써요 아바타 더 출시해주세요!!!!!!','5def8b67-69ae-4de1-81b2-4c50b704cab01A15FFD4-856C-4B71-BDAB-EB1A5B4FDE70.jpeg',_binary '\0','2023-04-06 23:21:35.490354','2023-04-06 23:21:35.490363',11),(12,'승리는 달콤하다','a87a8380-8050-45bf-9709-5494c27db376942CB723-4464-4C06-A963-E9064F9C13EE.jpeg',_binary '\0','2023-04-06 23:26:22.429811','2023-04-06 23:26:22.429820',4),(13,'저희집 고양이를 소개합니다 그의 이름은 일호','4e1765dd-050b-4ac7-990e-d67d9e47be011.jpg',_binary '\0','2023-04-07 00:03:42.608333','2023-04-07 00:03:42.608342',15),(14,'두번째 고양이를 소개합니다 쿠키가 아니라 쿠크(쿠키앤크림)요..','71e4d791-daaa-417e-afdf-8b06981ea11bf3.jpg',_binary '\0','2023-04-07 00:06:16.868201','2023-04-07 00:06:16.868208',15),(15,'저도 한 테트리스 하는데 껴주면 안될까요?',NULL,_binary '\0','2023-04-07 00:08:28.104136','2023-04-07 00:08:28.104145',15),(16,'밥알이 몇개고!!','fab1916e-4706-4895-a6f5-1d8227fd7751다운로드 (3).jpg',_binary '\0','2023-04-07 00:12:59.529580','2023-04-07 00:12:59.529588',3),(17,'아아아 ',NULL,_binary '\0','2023-04-07 00:23:11.021708','2023-04-07 00:23:11.021716',13),(18,'여러분 할로방구~~~~',NULL,_binary '\0','2023-04-07 00:26:57.338265','2023-04-07 00:26:57.338274',21),(19,'발표 화이팅하십쇼 아임피네','1f38fbeb-ed9e-465b-bc98-733ddb4838ff다운로드.jfif',_binary '\0','2023-04-07 00:29:39.740752','2023-04-07 00:29:39.740760',15),(20,'칼퇴를 해야지~','0ccedc6d-139d-48ad-b79d-72c7868f91118D733E36-0213-4CFE-B957-3D8C170783D4.jpeg',_binary '\0','2023-04-07 00:30:09.945711','2023-04-07 00:30:09.945721',13),(21,'강쥐는 마루','7d9476b7-5d55-4f67-8da7-e09661c21059sdfsd마루는       강쥐.jpg',_binary '\0','2023-04-07 00:37:18.319917','2023-04-07 00:37:18.319925',18);
/*!40000 ALTER TABLE `board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board_likes`
--

DROP TABLE IF EXISTS `board_likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board_likes` (
  `board_likes_id` bigint NOT NULL AUTO_INCREMENT,
  `board_id` bigint DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  PRIMARY KEY (`board_likes_id`),
  KEY `FKc9jvwd6yfb9pauk95g3p0olq7` (`board_id`),
  KEY `FKon575aux95yd7nu3dmscus9u2` (`member_id`),
  CONSTRAINT `FKc9jvwd6yfb9pauk95g3p0olq7` FOREIGN KEY (`board_id`) REFERENCES `board` (`board_id`),
  CONSTRAINT `FKon575aux95yd7nu3dmscus9u2` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board_likes`
--

LOCK TABLES `board_likes` WRITE;
/*!40000 ALTER TABLE `board_likes` DISABLE KEYS */;
INSERT INTO `board_likes` VALUES (1,1,3),(3,2,4),(4,4,9),(5,2,9),(6,5,11),(7,4,11),(8,1,11),(9,2,11),(10,3,11),(11,6,11),(12,8,1),(13,5,1),(14,6,1),(15,10,11),(16,12,4),(17,10,18),(18,13,4),(19,14,11),(20,4,15),(21,12,11),(22,6,15),(23,8,11),(24,15,11),(25,13,11),(26,5,15),(27,13,9),(28,14,9),(29,16,9),(30,12,9),(31,11,9),(32,5,9),(33,6,9),(34,3,21),(36,2,21),(38,20,4),(39,19,4);
/*!40000 ALTER TABLE `board_likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chat`
--

DROP TABLE IF EXISTS `chat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat` (
  `chat_id` bigint NOT NULL AUTO_INCREMENT,
  `created_time` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `message` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `chat_room_id` bigint DEFAULT NULL,
  `from_member_id` bigint DEFAULT NULL,
  PRIMARY KEY (`chat_id`),
  KEY `FK44b6elhh512d2722l09i6qdku` (`chat_room_id`),
  KEY `FK5gd7bskica7ov09j0rgbtp6c5` (`from_member_id`),
  CONSTRAINT `FK44b6elhh512d2722l09i6qdku` FOREIGN KEY (`chat_room_id`) REFERENCES `chat_room` (`chat_room_id`),
  CONSTRAINT `FK5gd7bskica7ov09j0rgbtp6c5` FOREIGN KEY (`from_member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat`
--

LOCK TABLES `chat` WRITE;
/*!40000 ALTER TABLE `chat` DISABLE KEYS */;
INSERT INTO `chat` VALUES (1,'2023/04/06 21:20:46.977','친신받아라 ',1,3),(2,'2023/04/06 21:53:00.516','바-로 우리 밍지구나했는데',6,4),(3,'2023/04/06 21:20:33.852','강쥐야?',3,4),(4,'2023/04/06 21:20:13.268','매가 약이죠',2,4),(5,'2023/04/06 21:17:45.247','하이',1,3),(6,'2023/04/06 21:52:55.039','ENTJ인거보고',6,4),(7,'2023/04/06 21:20:31.412','워뇽',3,4),(8,'2023/04/06 21:19:15.303','저희가',2,4),(9,'2023/04/06 21:45:25.949','ㅎㅇ',5,3),(10,'2023/04/06 21:21:13.150','ㅇㅈ',2,4),(11,'2023/04/06 21:19:17.298','백퍼라는디',2,4),(12,'2023/04/06 21:53:08.057','다른 민지라면',6,4),(13,'2023/04/06 21:20:16.374','하이롱롱 ',2,3),(14,'2023/04/06 21:20:09.683','정신을 못차리는 넘은',2,4),(15,'2023/04/06 21:53:12.292','안녕하세요ㅎ',6,4),(16,'2023/04/06 21:20:31.624','내일만되면됨',2,3),(17,'2023/04/06 21:19:33.206','헉스',2,3),(18,'2023/04/07 05:47:58.462','발표 너무 떨리네용',10,1),(19,'2023/04/07 05:47:49.265','안녕하쎄용',10,1),(20,'2023/04/07 08:41:21.440','날라가고 ㅈㄹ',19,4),(21,'2023/04/07 08:40:23.230','또 멀 언 듣죠?',16,4),(22,'2023/04/07 08:40:35.268','왜 데이터 날라겄냐..ㅋㅋ',16,4),(23,'2023/04/07 08:40:54.565','Shit',16,4),(24,'2023/04/07 08:41:11.393','채팅 데이터',19,4),(25,'2023/04/07 08:41:27.923','KIN',19,4),(26,'2023/04/07 08:40:13.301','개믹친색기',16,4);
/*!40000 ALTER TABLE `chat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chat_room`
--

DROP TABLE IF EXISTS `chat_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat_room` (
  `chat_room_id` bigint NOT NULL AUTO_INCREMENT,
  `from_member_id` bigint DEFAULT NULL,
  `to_member_id` bigint DEFAULT NULL,
  PRIMARY KEY (`chat_room_id`),
  KEY `FKdjxvat8m5eappm5n10kob4v1v` (`from_member_id`),
  KEY `FKkwvcpi3pip62ltbqcfj3va3r9` (`to_member_id`),
  CONSTRAINT `FKdjxvat8m5eappm5n10kob4v1v` FOREIGN KEY (`from_member_id`) REFERENCES `member` (`member_id`),
  CONSTRAINT `FKkwvcpi3pip62ltbqcfj3va3r9` FOREIGN KEY (`to_member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat_room`
--

LOCK TABLES `chat_room` WRITE;
/*!40000 ALTER TABLE `chat_room` DISABLE KEYS */;
INSERT INTO `chat_room` VALUES (1,2,3),(2,3,4),(3,1,4),(4,1,3),(5,7,3),(6,6,4),(7,9,4),(8,5,11),(9,5,2),(10,1,9),(11,1,11),(12,10,11),(13,3,11),(14,6,9),(15,14,3),(16,13,4),(17,9,11),(18,6,11),(19,11,4),(20,2,9),(21,18,4);
/*!40000 ALTER TABLE `chat_room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `face`
--

DROP TABLE IF EXISTS `face`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `face` (
  `face_id` bigint NOT NULL AUTO_INCREMENT,
  `bear_probability` double NOT NULL,
  `cat_probability` double NOT NULL,
  `dino_probability` double NOT NULL,
  `dog_probability` double NOT NULL,
  `fox_probability` double NOT NULL,
  `rabbit_probability` double NOT NULL,
  PRIMARY KEY (`face_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `face`
--

LOCK TABLES `face` WRITE;
/*!40000 ALTER TABLE `face` DISABLE KEYS */;
INSERT INTO `face` VALUES (1,0.30082377791404724,0.018913408741354942,0.00212105899117887,0.341848224401474,0.0061104921624064445,0.33018290996551514),(2,0.2,0.7,0.1,0.9,0.6,0.5),(3,0.9448473453521729,0.022428400814533234,0.0002045228611677885,0.031016560271382332,0.000027557129214983433,0.0014756153104826808),(4,0.2,0.6,0.7,0.3,1,0.4),(5,0.017971962690353394,0.0008834430482238531,0.8098393082618713,0.04208134114742279,0.1291423738002777,0.00008162272570189089),(6,0,0.7,0.7,0,0.8,0.8),(7,0.000014627714335802011,0.00000000044868217474736127,0.0000000006857387435665885,0.000007701142749283463,0.9999771118164062,0.0000002408179113899678),(8,0.4,0.5,0.8,0.7,0.1,0.3),(9,0.000001959997916856082,0.9935084581375122,0.00000031949451795298955,0.00004487713522394188,0.0000003842449984858831,0.006443914491683245),(10,0.7,1,0,1,0.6,0.2),(11,0.00000000003135761442174534,0.000000000022681837311133712,0.0000000000017081118420733676,0.000000005219631837860561,0.00000000014467541054052901,1),(12,0,0,0.8,0,0.3,0),(13,0.00000001974978225405266,0.0015005032764747739,0.000005435999355540844,0.9974102973937988,0.0000000005875372965924441,0.001083653187379241),(14,0.2,0.3,0.8,0.7,0.3,0.2),(15,0.000000000003208614146946176,0.9999979734420776,0.0000005427202722785296,0.000001160348347184481,0.0000001630688188924978,0.000000000029953019231587774),(16,0,1,1,0,1,1),(17,0.00913244392722845,0.5758339762687683,0.000007876010386098642,0.009129658341407776,0.00548131950199604,0.40041476488113403),(18,0,0.7,0.6,0.4,0.9,0.7),(19,0.00913244392722845,0.5758339762687683,0.000007876010386098642,0.009129658341407776,0.00548131950199604,0.40041476488113403),(20,0,0.7,0.6,0.6,0.8,0.7),(21,8.84538722434496e-18,0.00000006453505108083846,0.000000000000025647105627939724,0.9999989867210388,0.00000006271173447203182,0.0000005971884888822387),(22,0.4,1,0.8,1,0.4,0.4),(23,0.006566633004695177,0.00009488662180956453,0.000008615074875706341,0.0011603973107412457,0.9861250519752502,0.006044371053576469),(24,0,0.5,0,0.7,0.5,0.5),(25,0.00005806412809761241,0.9140576720237732,0.0000000023585942088288903,0.0005500350962392986,0.0458238385617733,0.03951035067439079),(26,0,1,1,0,0.5,0),(27,0.00005764502930105664,0.00000390548620998743,0.00003471041054581292,0.6603499054908752,0.3383062183856964,0.0012476341798901558),(28,0.1,1,1,0.5,0.7,0.5),(29,0.0000000004858017321751618,0.739348828792572,0.00000003617613586470725,0.24122722446918488,0.00004290217111702077,0.019381215795874596),(30,0,0,0,0,0,0.1);
/*!40000 ALTER TABLE `face` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `friend`
--

DROP TABLE IF EXISTS `friend`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `friend` (
  `friend_id` bigint NOT NULL AUTO_INCREMENT,
  `message` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `state` int NOT NULL DEFAULT '0',
  `from_member_id` bigint DEFAULT NULL,
  `to_member_id` bigint DEFAULT NULL,
  PRIMARY KEY (`friend_id`),
  KEY `FKg2x0pnnygratdt8p37ps8torr` (`from_member_id`),
  KEY `FKkplwuye8arugi953achlx2dom` (`to_member_id`),
  CONSTRAINT `FKg2x0pnnygratdt8p37ps8torr` FOREIGN KEY (`from_member_id`) REFERENCES `member` (`member_id`),
  CONSTRAINT `FKkplwuye8arugi953achlx2dom` FOREIGN KEY (`to_member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `friend`
--

LOCK TABLES `friend` WRITE;
/*!40000 ALTER TABLE `friend` DISABLE KEYS */;
INSERT INTO `friend` VALUES (1,'',-1,3,2),(2,'',1,4,3),(3,'',1,3,4),(4,'나랑결혼해주라',0,4,6),(5,'해윙',1,9,1),(6,'웅 님 곰임',1,9,2),(7,'움쪼옥',1,9,4),(8,'움쪼옥',1,4,9),(9,'해윙',1,1,9),(10,'',0,4,1),(11,'',-1,2,3),(12,'웅 님 곰임',1,2,9),(13,'당신은 나와의 궁합도가 99 퍼센트',0,11,5),(14,'당신. 나와의 궁합도가 쩔어요',1,11,4),(15,'당신 선글라스 먹찌네요',0,11,1),(16,'',0,11,10),(17,'믱지믱즤',0,9,6),(18,'당신. 나와의 궁합도가 쩔어요',1,4,11),(19,'뿡',0,4,13),(20,'당신 나와 궁합 100퍼입미다',0,11,14),(21,'',1,11,9),(22,'님님 우리 친구해용',1,11,3),(23,'밍지님 우리 칭구해욤',0,11,6),(24,'누가 봐도 곰인 난곰아님님',0,11,2),(25,'안뇽',1,18,4),(26,'',1,9,11),(27,'님님 우리 친구해용',1,3,11),(28,'받아줄 사람 구해용 ㅎㅎ ',1,3,9),(29,'받아줄 사람 구해용 ㅎㅎ ',1,9,3),(30,'안뇽',1,4,18),(31,'일호야옹',0,4,15),(32,'발표 못하면 죽임요',0,3,1),(33,'ㅎㅇ',1,1,18),(34,'얌마!!!!',0,21,1),(35,'ㅎㅇ',1,18,1);
/*!40000 ALTER TABLE `friend` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guest_book`
--

DROP TABLE IF EXISTS `guest_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guest_book` (
  `guest_book_id` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(140) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `registered_time` datetime(6) DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  `mini_room_id` bigint DEFAULT NULL,
  PRIMARY KEY (`guest_book_id`),
  KEY `FKcgj13y2yn6g1d1jv22avj6npy` (`member_id`),
  KEY `FK5na9i8ofgqm0wnuw2m7sse2ss` (`mini_room_id`),
  CONSTRAINT `FK5na9i8ofgqm0wnuw2m7sse2ss` FOREIGN KEY (`mini_room_id`) REFERENCES `mini_room` (`mini_room_id`),
  CONSTRAINT `FKcgj13y2yn6g1d1jv22avj6npy` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guest_book`
--

LOCK TABLES `guest_book` WRITE;
/*!40000 ALTER TABLE `guest_book` DISABLE KEYS */;
INSERT INTO `guest_book` VALUES (1,'하잉','2023-04-06 12:32:39.411376',5,4),(3,'이달소 노래 개미침; \n역시 뭘 좀 아는 사람ㅎ','2023-04-06 13:55:34.407955',4,3),(4,'방이 허젼해요\n','2023-04-06 14:01:01.271297',3,4),(5,'해위룽룽','2023-04-06 14:27:51.070982',9,4),(6,'안넝하떼어\n','2023-04-06 19:21:08.963114',11,5),(7,'안녕하떼어','2023-04-06 19:53:20.295944',11,10),(8,'엄청난 커스텀입미다','2023-04-06 20:11:55.514109',11,3),(11,'나 왔다감 ㅋ','2023-04-06 20:55:13.547599',1,8),(12,'보고싶어 건아\n','2023-04-06 23:11:30.960755',4,11),(13,'장원영인가요?','2023-04-07 00:09:39.839359',3,1),(14,'안넝하떼엉','2023-04-07 00:12:04.776763',11,4),(15,'하이\n','2023-04-07 00:12:18.590435',11,10),(16,'당신은 발표를 잘하는 남자입니다','2023-04-07 00:14:12.327704',3,2),(17,'장원영 화이팅','2023-04-07 00:31:07.117787',18,1);
/*!40000 ALTER TABLE `guest_book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `item_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `state` int NOT NULL DEFAULT '0',
  `item_type_id` bigint DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  PRIMARY KEY (`item_id`),
  KEY `FKh7kyk389qj2m5chaa0njsq601` (`item_type_id`),
  KEY `FKpuyun1nwd8fupsib8ekn7vrpm` (`member_id`),
  CONSTRAINT `FKh7kyk389qj2m5chaa0njsq601` FOREIGN KEY (`item_type_id`) REFERENCES `item_type` (`item_type_id`),
  CONSTRAINT `FKpuyun1nwd8fupsib8ekn7vrpm` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,'hat',0,1,1),(2,'glasses',0,1,1),(3,'wing',0,1,1),(4,'bed',0,2,1),(5,'table',0,2,1),(6,'lamp',0,2,1),(7,'etc',0,2,1),(8,'hat',5,1,2),(9,'glasses',5,1,2),(10,'wing',4,1,2),(11,'bed',2,2,2),(12,'table',1,2,2),(13,'lamp',2,2,2),(14,'etc',1,2,2),(15,'hat',5,1,3),(16,'glasses',4,1,3),(17,'wing',5,1,3),(18,'bed',2,2,3),(19,'table',2,2,3),(20,'lamp',2,2,3),(21,'etc',1,2,3),(22,'hat',5,1,4),(23,'glasses',3,1,4),(24,'wing',5,1,4),(25,'bed',3,2,4),(26,'table',2,2,4),(27,'lamp',2,2,4),(28,'etc',1,2,4),(29,'hat',0,1,5),(30,'glasses',0,1,5),(31,'wing',0,1,5),(32,'bed',0,2,5),(33,'table',0,2,5),(34,'lamp',0,2,5),(35,'etc',0,2,5),(36,'hat',0,1,6),(37,'glasses',0,1,6),(38,'wing',0,1,6),(39,'bed',0,2,6),(40,'table',0,2,6),(41,'lamp',0,2,6),(42,'etc',0,2,6),(43,'hat',0,1,7),(44,'glasses',0,1,7),(45,'wing',0,1,7),(46,'bed',0,2,7),(47,'table',0,2,7),(48,'lamp',0,2,7),(49,'etc',0,2,7),(50,'hat',3,1,9),(51,'glasses',3,1,9),(52,'wing',2,1,9),(53,'bed',1,2,9),(54,'table',1,2,9),(55,'lamp',2,2,9),(56,'etc',1,2,9),(64,'hat',4,1,11),(65,'glasses',5,1,11),(66,'wing',4,1,11),(67,'bed',3,2,11),(68,'table',2,2,11),(69,'lamp',2,2,11),(70,'etc',1,2,11),(71,'hat',0,1,13),(72,'glasses',0,1,13),(73,'wing',0,1,13),(74,'bed',3,2,13),(75,'table',1,2,13),(76,'lamp',2,2,13),(77,'etc',0,2,13),(78,'hat',0,1,14),(79,'glasses',0,1,14),(80,'wing',0,1,14),(81,'bed',3,2,14),(82,'table',0,2,14),(83,'lamp',2,2,14),(84,'etc',3,2,14),(85,'hat',5,1,15),(86,'glasses',5,1,15),(87,'wing',2,1,15),(88,'bed',0,2,15),(89,'table',0,2,15),(90,'lamp',0,2,15),(91,'etc',0,2,15),(92,'hat',0,1,18),(93,'glasses',3,1,18),(94,'wing',0,1,18),(95,'bed',2,2,18),(96,'table',1,2,18),(97,'lamp',1,2,18),(98,'etc',2,2,18),(99,'hat',2,1,21),(100,'glasses',5,1,21),(101,'wing',5,1,21),(102,'bed',1,2,21),(103,'table',2,2,21),(104,'lamp',1,2,21),(105,'etc',1,2,21);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_type`
--

DROP TABLE IF EXISTS `item_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_type` (
  `item_type_id` bigint NOT NULL AUTO_INCREMENT,
  `item_type_name` varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`item_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_type`
--

LOCK TABLES `item_type` WRITE;
/*!40000 ALTER TABLE `item_type` DISABLE KEYS */;
INSERT INTO `item_type` VALUES (1,'avatar'),(2,'miniRoom');
/*!40000 ALTER TABLE `item_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `member_id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `face_name` varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `file` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mbti` varchar(4) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `nickname` varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `token` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `face_id` bigint DEFAULT NULL,
  `prefer_face_id` bigint DEFAULT NULL,
  PRIMARY KEY (`member_id`),
  KEY `FK5pl6ex89qwaihpcff5ou2ox0o` (`face_id`),
  KEY `FK3csmj4lfulkfcy92d2tepemrc` (`prefer_face_id`),
  CONSTRAINT `FK3csmj4lfulkfcy92d2tepemrc` FOREIGN KEY (`prefer_face_id`) REFERENCES `face` (`face_id`),
  CONSTRAINT `FK5pl6ex89qwaihpcff5ou2ox0o` FOREIGN KEY (`face_id`) REFERENCES `face` (`face_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1,'kaka491@naver.com','강아지','49f22962-1054-4402-85e7-85def842bf8255b22cd9-e561-4a8f-a984-bf0041d32c73.png','ISFJ','워녕','eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwNzgxNDY5ODQxLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODE5OTEwNjksInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJrYWthNDkxQG5hdmVyLmNvbSJ9.IQmiDgzSOFVAp75OaCwXIKCpxQ79kUA8UJCB6K1RwVo',1,2),(2,'sbsggg03@naver.com','곰','576b6027-d737-4ea1-ae7b-3be20503e086378a5a01-1f32-4c20-9081-77a20cf2efb0.png','ISFP','난곰아님','eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwNzgxNTc0MDk4LCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODE5OTExNzQsInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJzYnNnZ2cwM0BuYXZlci5jb20ifQ.VUECeM1NsqPn_8JxuKXlu6OHKFGx1u0k3Jhkrj-shKw',3,4),(3,'vjflxk10@naver.com','공룡','bd99d134-9e63-4f71-be66-5e14c90c9f9393d9d932-d456-4491-8fef-f0457f6e283d.png','ISTP','순양진양철','eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwNzgyNTY4MTMxLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODE5OTIxNjgsInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJ2amZseGsxMEBuYXZlci5jb20ifQ.jnjmFfQw6pq0xVPwETGN92AX1hpgTxXypKFuyE6P-9M',5,6),(4,'xoa1235@naver.com','여우','718a26cd-a033-46b8-8693-352e940097deea6af67f-14aa-4859-9f56-c3f28171f0d2.png','ENTP','킹서니ㅋ','eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwNzgzNDQ2ODUzLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODE5OTMwNDYsInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJ4b2ExMjM1QG5hdmVyLmNvbSJ9.mu4niJprdd7O4Awf4gQFI8fOS5AuGfWy1wADBpaiy1s',7,8),(5,'hyeji9703@naver.com','고양이','f3f344a9-dbf4-4fdb-8738-cf2c4d96796c4c469d20-4792-4bbe-af8c-fe6bf81b14e8.png','ESFJ','리우','eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwNzg0MDI2MzAxLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODE5OTM2MjYsInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJoeWVqaTk3MDNAbmF2ZXIuY29tIn0.dFhOU2H9g4xZDy_0lPtHRF0x3bf0CyrPVg_zinpudA0',9,10),(6,'mjseok98@naver.com','토끼','14fc771f-f549-4369-9948-9a1b5d0ba7b9fba537db-27b9-4229-9e37-e455a6e283bf.png','ENTJ','밍지','eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwNzg0Njc4MjExLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODE5OTQyNzgsInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJtanNlb2s5OEBuYXZlci5jb20ifQ.6iMKGwGIS8dNgXOPppjyQ-oFrl0JpGaKJHpkc3QOHoA',11,12),(7,'00yujin00@naver.com','강아지','444ead6e-78cc-4b2e-8677-f312738c7994beb9b1e0-806f-4920-a0cb-7ed4f6c49a1b.png','ISFJ','R3f','eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwNzg0Nzk4MjExLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODE5OTQzOTgsInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiIwMHl1amluMDBAbmF2ZXIuY29tIn0.ekdegvxsQafYbaIhs-VckllktDDxsL78CWBflC3wOR8',13,14),(8,'tjsdk8050@naver.com',NULL,NULL,NULL,NULL,'eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwNzg2MDkwNjQ4LCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODE5OTU2OTAsInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJ0anNkazgwNTBAbmF2ZXIuY29tIn0.cMOFVNz7kz26rRvdQbJ9LQtzELtT_gcEdZuCbjAaatM',NULL,NULL),(9,'tjdus2033@naver.com','고양이','db9de873-8782-4a87-9cca-056c3a00294554aebd1a-cb5b-42b5-a1c7-04d493c4af99.png','ESFP','야옹박사','eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwNzg4ODc1NzMyLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODE5OTg0NzUsInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJ0amR1czIwMzNAbmF2ZXIuY29tIn0.5GAfd1F8NGW_c87gGB227MUp3A8vRS65GHf3VJLUKM0',15,16),(10,'kyjoo8@hanmail.net','고양이','a6f6bfa9-4a1e-4757-9c1b-3cf2bef20a9fa075f4e3-faaa-4cf4-9ba4-3a02d27d4b10.png','ISFP','zz','',17,18),(11,'kyjoo888@hanmail.net','고양이','614319b6-a434-4383-a0c9-611825146db885f20233-9976-45ee-8b55-65aa50e043b1.png','ISFP','윤두','eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwNzkxMDE0NDI4LCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODIwMDA2MTQsInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJreWpvbzg4OEBoYW5tYWlsLm5ldCJ9.5OlVj1IW17QjVdjPpCBY8rwD9apOel96UoEn8N5QRIY',19,20),(12,'kangsungil2@naver.com',NULL,NULL,NULL,NULL,'eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwODE5NjUwMDU4LCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODIwMjkyNTAsInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJrYW5nc3VuZ2lsMkBuYXZlci5jb20ifQ.hKaP1_pIleHEfFXATO8Ne39QIwDu9VLNVjQzV_bf4xI',NULL,NULL),(13,'thffh153@naver.com','강아지','7c755b10-4e93-408e-9c2d-bff40f98e792187fac89-5a00-4660-8fd3-6ae37dc809fd.png','INFP','거니','eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwODIxMzg3NTY0LCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODIwMzA5ODcsInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJ0aGZmaDE1M0BuYXZlci5jb20ifQ.El77i3JJ8jO4PrbBNYzWrMmqR9pf_oY1BlTtAEyfkVQ',21,22),(14,'hihn9089@kakao.com','여우','92579fe1-a433-4879-85a1-505d6129e6c409dbc696-85b5-4ef1-96fa-ef9a60992529.png','ENFJ','하누리','eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwODIxODUxMTgyLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODIwMzE0NTEsInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJoaWhuOTA4OUBrYWthby5jb20ifQ.LrLmypFP6SyfRfrYg9SWDs5DA6DIp9IJWHrMUA7B_7k',23,24),(15,'jigu6605@hanmail.net','고양이','859e5636-a327-447a-bc48-c62dd5b2ab7f3f1ff17e-c93c-4989-9cba-0a1c4063b47a.png','ISTP','일호','eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwODI0MDIxMDIxLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODIwMzM2MjEsInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJqaWd1NjYwNUBoYW5tYWlsLm5ldCJ9.U2EsiMhxY2ZtefR2a-s1_yZhFSQdjCFRL1X7OuhtssY',25,26),(16,'yejin1918@naver.com',NULL,NULL,NULL,NULL,'eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwODI0NTA5Njg5LCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODIwMzQxMDksInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJ5ZWppbjE5MThAbmF2ZXIuY29tIn0.KtS3PmE22KpGKQy84mFtgNopOkXTQbqd-ViU96EQJ7E',NULL,NULL),(17,'eosun77@gmail.com',NULL,NULL,NULL,NULL,'eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwODI0OTE0OTMxLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODIwMzQ1MTQsInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJlb3N1bjc3QGdtYWlsLmNvbSJ9.6Y-ZbOUcFhAnp8IY6QI5HmtIUnHEyezJ6HAOhsVQVG8',NULL,NULL),(18,'abcdq12345@naver.com','강아지','29612de6-50fe-4945-bf2b-02530c490b6288937b27-58b4-44de-a3c0-24bf4c2ae3f3.png','INTJ','조마루','eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwODI1NDkxNjU5LCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODIwMzUwOTEsInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJhYmNkcTEyMzQ1QG5hdmVyLmNvbSJ9.8gzf9_9fd6sOQXhuQ4Q0_iEtigssX6_tWtw2uPsVEFY',27,28),(19,'myway01212@gmail.com',NULL,NULL,NULL,NULL,'eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwODI1NTMzMDg0LCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODIwMzUxMzMsInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJteXdheTAxMjEyQGdtYWlsLmNvbSJ9.1mV01tRAOUkqV0wn26dbfGcs6yjAIt5SpDypQh1t9yY',NULL,NULL),(20,'uj9125@gmail.com',NULL,NULL,NULL,NULL,'eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwODI1NTYyNTk0LCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODIwMzUxNjIsInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJ1ajkxMjVAZ21haWwuY29tIn0._829GBPGUAevAic3qRj9nbo7nazAt5v4MhVUNmfPJ3Y',NULL,NULL),(21,'songheew1020@naver.com','고양이','7f4a73b5-8be7-40b0-9e9a-23c0f21769c9078fd16a-700a-4d0f-9981-ee9908b03c8a.png','ENFP','송히짱구','eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjgwODI2NTUzOTY2LCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODIwMzYxNTMsInN1YiI6InJlZnJlc2gtdG9rZW4iLCJ1c2VyRW1haWwiOiJzb25naGVldzEwMjBAbmF2ZXIuY29tIn0.hwVIja2e1PLo0NWxsfs6eqML-NsaP4liZedPahgpPhs',29,30);
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mini_room`
--

DROP TABLE IF EXISTS `mini_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mini_room` (
  `mini_room_id` bigint NOT NULL AUTO_INCREMENT,
  `likes` int NOT NULL DEFAULT '0',
  `state_message` varchar(140) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  PRIMARY KEY (`mini_room_id`),
  KEY `FKhusjkjwa7wh9j4hcndd6h4p22` (`member_id`),
  CONSTRAINT `FKhusjkjwa7wh9j4hcndd6h4p22` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mini_room`
--

LOCK TABLES `mini_room` WRITE;
/*!40000 ALTER TABLE `mini_room` DISABLE KEYS */;
INSERT INTO `mini_room` VALUES (1,2,'나만의 미니룸',1),(2,0,'발표 너무 힘들다',2),(3,1,' 내가 순양이고 순양이 나인기라',3),(4,4,'사랑아 보영해',4),(5,1,'',5),(6,0,'',6),(7,0,'',7),(8,1,'플젝 끝이다!! 기분 쩨공! ㅎㅎ ♡',9),(9,0,'',10),(10,0,'안녕하떼어 오늘 기분 째짐 !!!냐옹',11),(11,1,' 힘들어요',13),(12,0,'',14),(13,0,'',15),(14,0,'',18),(15,0,'',21);
/*!40000 ALTER TABLE `mini_room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mini_room_likes`
--

DROP TABLE IF EXISTS `mini_room_likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mini_room_likes` (
  `mini_room_likes_id` bigint NOT NULL AUTO_INCREMENT,
  `member_id` bigint DEFAULT NULL,
  `mini_room_id` bigint DEFAULT NULL,
  PRIMARY KEY (`mini_room_likes_id`),
  KEY `FK13swdyxg5hvyv8xldlft49iwh` (`member_id`),
  KEY `FKonmpfp1747033lnrj7u35qald` (`mini_room_id`),
  CONSTRAINT `FK13swdyxg5hvyv8xldlft49iwh` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`),
  CONSTRAINT `FKonmpfp1747033lnrj7u35qald` FOREIGN KEY (`mini_room_id`) REFERENCES `mini_room` (`mini_room_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mini_room_likes`
--

LOCK TABLES `mini_room_likes` WRITE;
/*!40000 ALTER TABLE `mini_room_likes` DISABLE KEYS */;
INSERT INTO `mini_room_likes` VALUES (1,4,4),(2,5,4),(4,3,3),(5,9,4),(6,3,4),(7,11,8),(8,11,5),(11,4,11),(12,3,1),(14,18,1);
/*!40000 ALTER TABLE `mini_room_likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reply`
--

DROP TABLE IF EXISTS `reply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reply` (
  `reply_id` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(70) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `is_deleted` bit(1) NOT NULL DEFAULT b'0',
  `registered_time` datetime(6) DEFAULT NULL,
  `board_id` bigint DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  PRIMARY KEY (`reply_id`),
  KEY `FKcs9hiip0bv9xxfrgoj0lwv2dt` (`board_id`),
  KEY `FKen6vrmi5oth4bg6ybfc202fmu` (`member_id`),
  CONSTRAINT `FKcs9hiip0bv9xxfrgoj0lwv2dt` FOREIGN KEY (`board_id`) REFERENCES `board` (`board_id`),
  CONSTRAINT `FKen6vrmi5oth4bg6ybfc202fmu` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reply`
--

LOCK TABLES `reply` WRITE;
/*!40000 ALTER TABLE `reply` DISABLE KEYS */;
INSERT INTO `reply` VALUES (1,'울쥐마 바보야',_binary '\0','2023-04-06 12:23:07.702030',2,3),(2,'안뇨하세요',_binary '\0','2023-04-06 12:41:38.040195',3,3),(3,'울밍지',_binary '\0','2023-04-06 12:52:02.006861',3,4),(4,'(대충 정준하 절규짤)',_binary '\0','2023-04-06 14:45:05.200347',6,4),(5,'당신 테트리스 못하잖아요',_binary '\0','2023-04-06 15:42:00.667899',8,2),(6,'저요',_binary '\0','2023-04-06 15:42:58.665518',8,3),(7,'레츠고',_binary '\0','2023-04-06 15:43:38.397197',8,1),(8,'바로 고',_binary '\0','2023-04-06 15:57:34.770736',8,4),(9,'떨지마 칭구',_binary '\0','2023-04-06 20:50:56.800826',10,11),(10,'당신 워녕이자나',_binary '\0','2023-04-06 21:26:34.361905',10,3),(11,'당신 할 수 있어요',_binary '\0','2023-04-06 22:24:12.026816',10,9),(12,'할-쨕',_binary '\0','2023-04-06 23:26:51.368201',11,4),(13,'오늘은 레이저 빔 없어 괜찮아',_binary '\0','2023-04-06 23:27:29.203096',10,4),(14,'직접 만들어주세용',_binary '\0','2023-04-06 23:53:55.735756',11,3),(15,'오빠가 발표해?? 대박쓰',_binary '\0','2023-04-07 00:01:33.100830',10,18),(16,'다시 테스트',_binary '','2023-04-07 00:04:09.710244',10,18),(17,'ㅋㅋㅋㅋㅋㅋ또한도전',_binary '\0','2023-04-07 00:04:48.022324',12,15),(18,'어머머 너무 귀여워요 더 보여주세요 !!!! ',_binary '\0','2023-04-07 00:04:53.084377',13,11),(19,'헉헉허거헉헉 일호얌',_binary '\0','2023-04-07 00:05:13.715550',13,4),(20,'허어어어억!!!! 너무 기엽따 !!!!!!!! ',_binary '\0','2023-04-07 00:09:46.705471',14,11),(21,'일호 해윙 친구하싈?',_binary '\0','2023-04-07 00:11:18.012578',13,9),(22,'바-로 고',_binary '\0','2023-04-07 00:11:20.147487',15,4),(23,'쿠크 해윙',_binary '\0','2023-04-07 00:11:36.955591',14,9),(24,'커피빵 하쉴래용?',_binary '\0','2023-04-07 00:13:24.237246',15,3),(25,'레츠고',_binary '\0','2023-04-07 00:13:49.598461',15,1),(26,'우리예쏠이',_binary '\0','2023-04-07 00:13:54.565640',5,4),(27,'그걸 다 어케 알아요 ㅠ',_binary '\0','2023-04-07 00:14:13.108870',16,4),(28,'ㅋㅋㅋㅋㅋㅋㅋ개웃곀ㅋㅋㅋ',_binary '\0','2023-04-07 00:14:36.981295',12,13),(29,'캄온 캄온 캄온 함께 합시다',_binary '\0','2023-04-07 00:15:39.981461',15,11),(30,'진심 개귀엽다....',_binary '\0','2023-04-07 00:15:53.301232',13,13),(31,'쮸압',_binary '\0','2023-04-07 00:17:03.602517',14,13),(32,'테트리스 제 취업비결이랍니다',_binary '\0','2023-04-07 00:17:07.440977',15,15),(33,'민지방구!',_binary '\0','2023-04-07 00:19:46.520787',3,21),(34,'울 공쥬님~~~~~~~',_binary '\0','2023-04-07 00:27:50.199447',5,15),(35,'뿡',_binary '\0','2023-04-07 00:30:18.663028',18,4),(36,'끌어올려~',_binary '\0','2023-04-07 00:30:40.658122',20,4),(37,'월루족 저도 껴주세요',_binary '\0','2023-04-07 00:31:22.495786',20,15),(38,'%%',_binary '\0','2023-04-07 00:31:43.193360',17,4);
/*!40000 ALTER TABLE `reply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reward`
--

DROP TABLE IF EXISTS `reward`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reward` (
  `reward_id` bigint NOT NULL AUTO_INCREMENT,
  `state` bit(1) NOT NULL DEFAULT b'0',
  `title` varchar(40) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `member_id` bigint DEFAULT NULL,
  PRIMARY KEY (`reward_id`),
  KEY `FKf4dbr6np2yfxggg7st6girb66` (`member_id`),
  CONSTRAINT `FKf4dbr6np2yfxggg7st6girb66` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reward`
--

LOCK TABLES `reward` WRITE;
/*!40000 ALTER TABLE `reward` DISABLE KEYS */;
/*!40000 ALTER TABLE `reward` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-07  9:37:56
