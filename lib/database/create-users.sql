CREATE TABLE `users` (
  `user_id` int(8) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(145) NOT NULL,
  `last_name` varchar(145) NOT NULL,
  `email` varchar(145) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
);