// lib/prisma.js
import { PrismaClient } from '@prisma/client'

let db

if (!globalThis.prisma) {
  globalThis.prisma = new PrismaClient()
}
db = globalThis.prisma

export { db }
