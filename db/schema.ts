import {sqliteTable,integer,text} from 'drizzle-orm/sqlite-core';
export const submissions=sqliteTable('submissions',{
 id:integer('id').primaryKey({autoIncrement:true}),
 requestId:text('request_id').notNull().unique(),
 input:text('input').notNull(),
 address:text('address').notNull(),
 submittedAt:integer('submitted_at').notNull(),
 status:text('status').notNull().default('SCANNING'),
 symbol:text('symbol'),
 verdict:text('verdict'),
});
