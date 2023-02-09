export const originalCreateUserSnippetComplete = `import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "rachel@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  // [...]
}
`;

export const creatingUserAttributesSnippet = `async function seed() {
  const email = "rachel@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  // [...]
}`;

export const originalPrismaCreateUserSnippet = `const user = await prisma.user.create({
  data: {
    email,
    password: {
      create: {
        hash: hashedPassword,
      },
    },
  },
});`;

export const basicMembershipSeedSnippet = `async function seed() {
  const basicMembership: Pick<Membership, "level" | "description" | "price"> = {
    level: "Basic",
    description: "1 martial art - 2 sessions per week. Monthly fee.",
    price: "£25.00",
  };

  // cleanup the existing memberships in database
  await prisma.membership
    .delete({ where: { level: basicMembership.level } })
    .catch(() => {
      // no worries if it doesn't exist yet
    });

  await prisma.membership.create({
    data: {
      level: basicMembership.level,
      description: basicMembership.description,
      price: basicMembership.price,
    },
  });

  // [...I've cut some code out here...]
  // [...but keep it in your original...]

  console.log(\`Database has been seeded. 🌱\`);
}`;

export const allMembershipsLong = `const basicMembership: Pick<Membership, "level" | "description" | "price"> = {
  level: "Basic",
  description: "1 martial art - 2 sessions per week. Monthly fee.",
  price: "£25.00",
};
const intermediateMembership: Pick<
  Membership,
  "level" | "description" | "price"
> = {
  level: "Intermediate",
  description: "1 martial art - 3 sessions per week). Monthly fee",
  price: "£35.00",
};
const advancedMembership: Pick<
  Membership,
  "level" | "description" | "price"
> = {
  level: "Advanced",
  description: "Any 2 martial arts - 5 sessions per week). Monthly fee",
  price: "£45.00",
};
const eliteMembership: Pick<Membership, "level" | "description" | "price"> = {
  level: "Elite",
  description: "Unlimited classes. Monthly fee",
  price: "£60.00",
};
const juniorMembership: Pick<Membership, "level" | "description" | "price"> =
  {
    level: "Junior",
    description: "Can attend all-kids martial arts sessions. Monthly fee",
    price: "£25.00",
  };

// Clean up all existing memberships from previous seeds
await prisma.membership
  .delete({ where: { level: basicMembership.level } })
  .catch(() => {});
await prisma.membership
  .delete({ where: { level: intermediateMembership.level } })
  .catch(() => {});
await prisma.membership
  .delete({ where: { level: advancedMembership.level } })
  .catch(() => {});
await prisma.membership
  .delete({ where: { level: eliteMembership.level } })
  .catch(() => {});
await prisma.membership
  .delete({ where: { level: juniorMembership.level } })
  .catch(() => {});

await prisma.membership.create({
  data: {
    level: basicMembership.level,
    description: basicMembership.description,
    price: basicMembership.price,
  },
});
await prisma.membership.create({
  data: {
    level: intermediateMembership.level,
    description: intermediateMembership.description,
    price: intermediateMembership.price,
  },
});
await prisma.membership.create({
  data: {
    level: advancedMembership.level,
    description: advancedMembership.description,
    price: advancedMembership.price,
  },
});
await prisma.membership.create({
  data: {
    level: eliteMembership.level,
    description: eliteMembership.description,
    price: eliteMembership.price,
  },
});
await prisma.membership.create({
  data: {
    level: juniorMembership.level,
    description: juniorMembership.description,
    price: juniorMembership.price,
  },
});
`;

export const allMembershipsArray = `const allMemberships: Pick<Membership, "level" | "description" | "price">[] =
[
  {
    level: "Basic",
    description: "1 martial art - 2 sessions per week. Monthly fee.",
    price: "£25.00",
  },
  {
    level: "Intermediate",
    description: "1 martial art - 3 sessions per week). Monthly fee",
    price: "£35.00",
  },
  {
    level: "Advanced",
    description: "Any 2 martial arts - 5 sessions per week). Monthly fee",
    price: "£45.00",
  },
  {
    level: "Elite",
    description: "Unlimited classes. Monthly fee",
    price: "£60.00",
  },
  {
    level: "Junior",
    description: "Can attend all-kids martial arts sessions. Monthly fee",
    price: "£25.00",
  },
];`;

export const allMembershipsLoopSnippet = `allMemberships.forEach(async (membership) => {
  // Clean up all existing memberships from previous seeds
  await prisma.membership
    .delete({ where: { level: membership.level } })
    .catch(() => {});

  // Create new memberships
  await prisma.membership.create({
    data: {
      level: membership.level,
      description: membership.description,
      price: membership.price,
    },
  });
});`;

export const allMembershipsSeedFinal = `async function seed() {
  const allMemberships: Pick<Membership, "level" | "description" | "price">[] =
    [
      {
        level: "Basic",
        description: "1 martial art - 2 sessions per week. Monthly fee.",
        price: "£25.00",
      },
      {
        level: "Intermediate",
        description: "1 martial art - 3 sessions per week). Monthly fee",
        price: "£35.00",
      },
      {
        level: "Advanced",
        description: "Any 2 martial arts - 5 sessions per week). Monthly fee",
        price: "£45.00",
      },
      {
        level: "Elite",
        description: "Unlimited classes. Monthly fee",
        price: "£60.00",
      },
      {
        level: "Junior",
        description: "Can attend all-kids martial arts sessions. Monthly fee",
        price: "£25.00",
      },
    ];

  allMemberships.forEach(async (membership) => {
    // Clean up all existing memberships from previous seeds
    await prisma.membership
      .delete({ where: { level: membership.level } })
      .catch(() => {});

    // Create new memberships
    await prisma.membership.create({
      data: {
        level: membership.level,
        description: membership.description,
        price: membership.price,
      },
    });
  });

  [...]

  console.log(\`Database has been seeded. 🌱\`);
}`;

export const originalCreateUsersAndNotesSnippet = `const hashedPassword = await bcrypt.hash("racheliscool", 10);

const user = await prisma.user.create({
  data: {
    email,
    password: {
      create: {
        hash: hashedPassword,
      },
    },
  },
});

await prisma.note.create({
  data: {
    title: "My first note",
    body: "Hello, world!",
    userId: user.id,
  },
});

await prisma.note.create({
  data: {
    title: "My second note",
    body: "Hello, world!",
    userId: user.id,
  },
});`;

export const basicMembershipSeed = `const basicMembership = await prisma.membership.create({
  data: {
    level: "Basic",
    description: "1 martial art - 2 sessions per week. Monthly fee.",
    price: "£25.00",
  },
});`;

export const createUserWithBasicMembershipSnippet = `const user = await prisma.user.create({
  data: {
    email,
    password: {
      create: {
        hash: hashedPassword,
      },
    },
    membershipId: basicMembership.id,
  },
});`;

export const createIntermediateUserMemberSnippet = `const intermediateMemberEmail = "intermediateMember@email.com";

// cleanup the existing database
await prisma.user
  .delete({ where: { email: intermediateMemberEmail } })
  .catch(() => {
    // no worries if it doesn't exist yet
  });

await prisma.user.create({
  data: {
    email: intermediateMemberEmail,
    password: {
      create: {
        hash: hashedPassword,
      },
    },
    membershipId: intermediateMembership.id,
  },
});`;
