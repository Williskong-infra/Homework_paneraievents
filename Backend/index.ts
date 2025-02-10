import express from 'express'
import { Users, Events } from './models'


const app = express()
const port = 5000


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/submit', async (req, res) => {
  const { title, first_name, last_name, mobile, email } = req.body;
  const newUser = await Users.create({
    title,
    first_name,
    last_name,
    mobile,
    email,
  });
  res.send('submit success')
});
  
app.get('/check_booked', (req, res) => {
  res.send('Hello World!')
})

app.get('/timeslot_and_vacancy', async (req, res) => {
  const all_sessions = await Events.findAll()

  res.json(all_sessions)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})