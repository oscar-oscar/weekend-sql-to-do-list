CREATE TABLE "todo_list"(
	"id" serial primary key,
	"date_added" varchar(10) not null,
	"task_title" varchar(40) not null,
	"task_descript" varchar(100) not null,
	"priority" varchar(4) not null,
	"completed_task" varchar(3), 
	"notes" varchar(100)
);

INSERT INTO "todo_list" ("date_added", "task_title", "task_descript", "priority","completed_task", "notes")
VALUES ('2022-08-13', 'second task title here', 'task decription here', 'low', 'yes' , 'notes here');

SELECT * FROM "todo_list";
