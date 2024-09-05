import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const route = express.Router()

route.get('/listar_usuarios/:id')

module.exports = route