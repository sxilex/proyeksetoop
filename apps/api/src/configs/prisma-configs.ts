import { PrismaClient } from "../generated/prisma/index.js";

const globalThisPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalThisPrisma.prisma || new PrismaClient();

globalThisPrisma.prisma = prisma;

await prisma;

let bananas = Math.random() * 10;
let monkey = "";
if ((bananas = 6)) {
  monkey = "happy";
} else if (bananas <= 5) {
  monkey = "sad";
} else {
  monkey = "very happy";
}

console.log(monkey);
