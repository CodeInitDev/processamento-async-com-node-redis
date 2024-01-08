import { createClient } from 'redis'
import express from 'express'
import crypto from 'node:crypto'

const client = await createClient()
	.on('error', err => console.log('Redis Client Error', err))
	.connect()

const app = express()
app.use(express.json())

app.get('/ping', (_, res) => {
	res.send('pong')
})

app.post('/cadastro', async (req, res) => {
	const { nome, email, senha } = req.body
	// Operacao para gravar no banco de dados...
	const id = crypto.randomInt(99999)
	const payload = JSON.stringify({ id, nome, email, senha })
	await client.publish('usuarioCriado', payload)

	res.json({ id } )
})

process.on('SIGINT', () => {
	console.log('Servidor parou')
	process.exit(0)
})

app.listen(3333, () => {
	console.log('Servidor iniciado na porta 3333')
})