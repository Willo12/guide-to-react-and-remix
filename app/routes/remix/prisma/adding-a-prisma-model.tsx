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
      <div className="flex flex-wrap">
        <Link
          className="mr-2 mb-2 flex items-center justify-center rounded-2xl bg-neutral-200 px-3 py-2 text-center text-xs uppercase leading-relaxed tracking-wide text-neutral-900 last-of-type:mr-0 hover:bg-white"
          to="creating-a-table"
        >
          Create a table
        </Link>
        <Link
          className="mr-2 mb-2 flex items-center justify-center rounded-2xl bg-neutral-200 px-3 py-2 text-center text-xs uppercase leading-relaxed tracking-wide text-neutral-900 hover:bg-white"
          to="view-the-database"
        >
          View the Database
        </Link>
        <Link
          className="mr-2 mb-2 flex items-center justify-center rounded-2xl bg-neutral-200 px-3 py-2 text-center text-xs uppercase leading-relaxed tracking-wide text-neutral-900 hover:bg-white"
          to="seeding-data"
        >
          Seeding data
        </Link>
        <Link
          className="mr-2 mb-2 flex items-center justify-center rounded-2xl bg-neutral-200 px-3 py-2 text-center text-xs uppercase leading-relaxed tracking-wide text-neutral-900 hover:bg-white"
          to="seeding-data-challenge"
        >
          Seeding: Challenge
        </Link>
        <Link
          className="mr-2 mb-2 flex items-center justify-center rounded-2xl bg-neutral-200 px-3 py-2 text-center text-xs uppercase leading-relaxed tracking-wide text-neutral-900 hover:bg-white"
          to="associate-users-with-memberships"
        >
          Associate users and memberships
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default AddingAModal;
