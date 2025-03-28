import { Pool } from "pg"; // Импорт клиента для PostgreSQL

// Создаём пул подключений с использованием строки подключения из переменных окружения
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }, // Для безопасного соединения
});

// Функция для тестового запроса
async function testConnection() {
    try {
        const res = await pool.query("SELECT NOW()"); // Простой запрос к базе данных
        console.log("Database connected:", res.rows[0]);
    } catch (err) {
        console.error("Database connection error:", err);
    }
}

// Вызываем функцию для теста
testConnection();
