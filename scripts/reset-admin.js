const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const email = "admin@antaryatra.com";
  const password = process.env.ADMIN_PASSWORD;

  if (!password) {
    throw new Error("ADMIN_PASSWORD is missing");
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.user.upsert({
    where: { email },
    update: {
      name: "Antaryatra Admin",
      passwordHash,
      role: "ADMIN",
    },
    create: {
      name: "Antaryatra Admin",
      email,
      passwordHash,
      role: "ADMIN",
    },
  });

  console.log("ADMIN USER CREATED/UPDATED");
}

main()
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
