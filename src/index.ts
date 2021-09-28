import express, { Request, Response, NextFunction } from 'express'
import errorHandler from './models/error.handler.middleware'
import statusRoute from './routes/status.route'
import usersRoute from './routes/users.route'

const app = express()

// Configurações da aplicação
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configurações de rotas
app.use(usersRoute)
app.use(statusRoute)

// Configuração dos handlers de erro
app.use(errorHandler)

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Funfando')
})