export const newMemberShipSnippet = `model Membership {
  id          String @id @default(cuid())
  level       String @unique
  description String
  price       String

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  users       User[]
}`;

export const updatedUserModelSnippet = `model User {
  id    String @id @default(cuid())
  email String @unique

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  password      Password?
  notes         Note[]
  membership    Membership? @relation(fields: [membershipId], references: [id], onDelete: Cascade, onUpdate: Cascade)
  membershipId  String?
}`;
