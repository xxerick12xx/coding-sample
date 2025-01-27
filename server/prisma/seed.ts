import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const defaultData: Omit<
  Prisma.UserCreateInput,
  "given_name" | "last_name" | "email"
> = {
  phone: "0453-283-283",
  house_number: "2468",
  street: "Test st.",
  suburb: "City Add",
  state: "State Add",
  postcode: "4444",
  country: "Philippines",
};

const userData: Prisma.UserCreateInput[] = [
  {
    given_name: "John",
    last_name: "Johnson",
    email: "jh@email121.com",
    ...defaultData,
  },
  {
    given_name: "Matthew",
    last_name: "Lombard",
    email: "mat197501@gmail.com",
    ...defaultData,
  },
  {
    given_name: "Joe",
    last_name: "Dickson",
    email: "joe@dickson.com",
    ...defaultData,
  },
  {
    given_name: "Scarlet",
    last_name: "Johnson",
    email: "scarlet@johnson.com",
    ...defaultData,
  },
  {
    given_name: "Peter",
    last_name: "Rhonda",
    email: "peter101@yahoo.com",
    ...defaultData,
  },
];

export async function main() {
  await prisma.user.createMany({
    data: userData,
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
