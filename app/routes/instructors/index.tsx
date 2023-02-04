import instructorGraphic from "~/assets/martial-arts-instructor.jpg";

interface InstructorProps {
  fName: string;
  lName: string;
  image?: string;
}

const InstructorElement = ({ fName, lName, image }: InstructorProps) => {
  return (
    <div className="mt-10 mb-10">
      <div className="w-64 rounded-md bg-white lg:flex lg:w-96 lg:items-center lg:justify-center">
        <img
          className="rounded-t-md lg:rounded-t-none lg:rounded-l-md"
          src={image ? image : instructorGraphic}
          alt="Martial Arts Instructor"
        />
        <div className="rounded-b-md bg-white lg:h-96 lg:rounded-r-md">
          <h3 className="lg:text-1xl ml-3 mt-2 font-light text-gray-500 lg:ml-6">
            INSTRUCTOR
          </h3>
          <h1 className="ml-3 text-2xl font-semibold lg:ml-6 lg:text-3xl">
            {fName} {lName}
          </h1>
          <div className="mt-4 ml-3 mr-6 text-gray-500 lg:ml-6 lg:mr-6 lg:w-96">
            <p>
              {fName} is blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blahblah blah blah blah blah blah blah
              blah blah blah blah{" "}
            </p>
          </div>
          <div className="mt-6 ml-3 text-2xl font-bold text-green-700">
            <h1 className="font-serif">£65 per Session</h1>
          </div>
          <div className="mt-4 flex h-16 w-64 items-center justify-center lg:h-60 lg:w-full">
            <button
              className="mb-1 flex h-9 w-56 items-center justify-center rounded-sm
            bg-green-700 text-white hover:bg-green-900 lg:h-10 lg:w-96"
            >
              🛒Manage Membership
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Instructors() {
  return (
    <div className="flex justify-center bg-gray-400 ">
      <InstructorElement fName="Jo" lName="Michaels" />
    </div>
  );
}

export default Instructors;
