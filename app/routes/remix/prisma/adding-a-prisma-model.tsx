import { Link, Outlet } from "@remix-run/react";
import Heading from "~/components/Heading";

const newMemberShipSnippet = `model Membership {
  id          String @id @default(cuid())
  level       String
  description String
  price       String

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: Cascade)
  userId String @unique
}`;

const AddingAModal = () => {
  return (
    <>
      <Heading level="h1">Adding a Model</Heading>
      <div className="flex justify-between">
        <Link
          className="flex items-center justify-center rounded-2xl bg-neutral-200 px-3 py-2 text-center text-xs uppercase leading-relaxed tracking-wide text-neutral-900 hover:bg-white"
          to="creating-a-table"
        >
          Create a table
        </Link>
        <Link
          className="flex items-center justify-center rounded-2xl bg-neutral-200 px-3 py-2 text-center text-xs uppercase leading-relaxed tracking-wide text-neutral-900 hover:bg-white"
          to="seeding-data"
        >
          Seeding data
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default AddingAModal;
