CREATE TABLE `todos` (
  `todo_id` int(8) NOT NULL AUTO_INCREMENT,
  `title` varchar(145) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `expires_at` datetime DEFAULT NULL,
  `label` varchar(145) DEFAULT NULL,
  `priority` varchar(10) DEFAULT NULL,
  `done` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`todo_id`)
);