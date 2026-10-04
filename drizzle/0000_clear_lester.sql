CREATE TABLE `submissions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`request_id` text NOT NULL,
	`input` text NOT NULL,
	`address` text NOT NULL,
	`submitted_at` integer NOT NULL,
	`status` text DEFAULT 'SCANNING' NOT NULL,
	`symbol` text,
	`verdict` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `submissions_request_id_unique` ON `submissions` (`request_id`);