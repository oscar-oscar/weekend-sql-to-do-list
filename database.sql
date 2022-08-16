CREATE TABLE "todo_list"(
	"id" serial primary key,
	"date_added" varchar(5) not null,
	"task_title" varchar(40) not null,
	"task_descript" varchar(100) not null,
	"priority" varchar(4) not null,
	"notes" varchar(100),
	"status" varchar(9) not null
);

INSERT INTO "todo_list" ("date_added", "task_title", "task_descript", "priority","notes", "status")
VALUES ('08/16', 'task title here', 'task decription here', 'low', 'notes here' , 'WIP');

SELECT * FROM "todo_list";

UPDATE "todo_list" SET "status" = 'completed' WHERE "id" = 1;
