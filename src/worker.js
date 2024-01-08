import { createClient } from 'redis'

const client = await createClient()
  .on('error', err => console.log('Redis Client Error', err))
  .connect()

await client.subscribe('usuarioCriado', async (message) => {
  console.log(message)
  
  const payload = JSON.parse(message)
  
  setTimeout(() => {
    console.log(`Email enviado para ${payload.email}`)
  }, 3000)
})