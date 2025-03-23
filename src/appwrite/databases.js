import { databases } from "./config";
import { ID } from "appwrite";

const db = {};

const collections = [
	{
		dbId: import.meta.env.VITE_DATABASE_ID,
		collection_id: import.meta.env.VITE_COLLECTION_ROOM_ID,
		name: "rooms",
	},

	{
		dbId: import.meta.env.VITE_DATABASE_ID,
		collection_id: import.meta.env.VITE_COLLECTION_TEAM_ID,
		name: "teams",
	},
];

collections.forEach((col) => {
	db[col.name] = {
		create: (payload, permissions, id = ID.unique()) =>
			databases.createDocument(
				col.dbId,
				col.collection_id,
				id,
				payload,
				permissions
			),
		update: (id, payload, permissions) =>
			databases.updateDocument(
				col.dbId,
				col.collection_id,
				id,
				payload,
				permissions
			),
		delete: (id) => databases.deleteDocument(col.dbId, col.collection_id, id),

		list: (queries = []) =>
			databases.listDocuments(col.dbId, col.collection_id, queries),

		get: (id) => databases.getDocument(col.dbId, col.collection_id, id),
	};
});

export default db;
