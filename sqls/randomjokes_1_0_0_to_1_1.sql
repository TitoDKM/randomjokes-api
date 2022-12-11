ALTER TABLE jokes ADD COLUMN `likes` int NOT NULL DEFAULT 0 AFTER `punchline`;
ALTER TABLE jokes ADD COLUMN `dislikes` int NOT NULL DEFAULT 0 AFTER `likes`;