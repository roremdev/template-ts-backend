import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
    try {
        // code
    } catch (error) {
        // error
    }
}

main().finally(async () => {
    await prisma.$disconnect()
})
