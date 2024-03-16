import { initTables } from "$lib/db";
import { closeConnection, openConnection } from "$lib/db/connector";
import process from "process";

function stop() {
	console.log("gracefully shutting down the server...");
	closeConnection();
	process.exit();
}

openConnection();
initTables();

process.on("SIGINT", stop); // Ctrl+C
process.on("SIGTERM", stop); // docker stop
