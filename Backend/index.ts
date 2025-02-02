import express from 'express'
import { Users, Events } from './models'
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

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