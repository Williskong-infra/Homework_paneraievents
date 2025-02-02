const express = require('express');
const cors = require('cors');
const { Pool, Events } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
},
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/check_booked', (req, res) => {
  res.send('Hello World');
});

app.get('/timeslot_and_vacancy', async (req, res) => {
  const all_events = await Events.findAll()
  res.json(all_sessions) 
});


app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({
      message: 'Database connection successful!',
      timestamp: result.rows[0].now,
    });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({
      message: 'Database connection failed.',
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
