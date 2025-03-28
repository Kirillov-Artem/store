import express, { Request, Response } from "express"; // Подключаем Express
const pool = require("./db"); // Импортируем файл с подключением к БД

const app = express();
const port = process.env.PORT || 3000;

// Простой роут для проверки работы сервера
app.get("/", async (req: Request, res: Response) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.send(`Database connected: ${result.rows[0].now}`);
    } catch (err) {
        res.send("Error connecting to the database");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
