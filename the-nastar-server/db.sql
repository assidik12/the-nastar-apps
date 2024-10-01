CREATE DATABASE `the_nastar_db`;
USE `the_nastar_db`;

CREATE TABLE `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `username` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
)  engine=InnoDB;

CREATE TABLE `products` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `description` varchar(255) NOT NULL,
    `image` varchar(255) NOT NULL,
    `price` int(11) NOT NULL,
    PRIMARY KEY (`id`)
)  engine=InnoDB;

INSERT INTO `products` ( `name`, `description`, `image`, `price`) VALUES ('Product 1', 'Description 1', 'image 1', '1000');

CREATE TABLE `transactions` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `transaction_id` VARCHAR(255) NOT NULL,
    `user_id` int(11) NOT NULL,
    `product_id` int(11) NOT NULL,
    PRIMARY KEY (`id`)
)  engine=InnoDB;

CREATE TABLE `transaction_detail` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `transaction_id` VARCHAR(255) NOT NULL,
    `product_id` int(11) NOT NULL,
    `quantity` int(11) NOT NULL,
    `total_price` int(11) NOT NULL,
    PRIMARY KEY (`id`)
)  engine=InnoDB;

ALTER TABLE `users` ADD COLUMN `role` VARCHAR(255) NOT NULL;
ALTER TABLE `users` ADD COLUMN `address` VARCHAR(255) NOT NULL;
ALTER TABLE `users` ADD COLUMN `phone` VARCHAR(255) NOT NULL;

ALTER TABLE `products` ADD COLUMN `stock` int(11) NOT NULL;

ALTER TABLE `transactions` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
ALTER TABLE `transactions` ADD Foreign Key (`product_id`) REFERENCES `products` (`id`);

