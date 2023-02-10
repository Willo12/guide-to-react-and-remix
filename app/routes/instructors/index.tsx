import instructorGraphic from "~/assets/martial-arts-instructor.jpg";
import secondInstructorGraphic from "~/assets/second-instructor.jpg";

const firstInstructor = instructorGraphic;
const secondInstructor = secondInstructorGraphic;

const firstDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod";
const secondDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

interface InstructorProps {
  fName: string;
  lName: string;
  image?: string;
  description: string;
  price: string;
}

const InstructorElement = ({
  fName,
  lName,
  image,
  description,
  price,
}: InstructorProps) => {
  return (
    <div className="mt-10 mb-10 flex shadow-2xl">
      <div className="w-64 rounded-md bg-white lg:flex lg:w-96 lg:items-center lg:justify-center">
        <img
          className="rounded-t-md lg:rounded-t-none lg:rounded-l-md"
          src={image ? image : instructorGraphic}
          alt="Martial Arts Instructor"
        />
        <div className="rounded-b-md bg-white lg:h-96 lg:rounded-r-md">
          <p className="ml-3 mt-4  text-xs font-light text-gray-500 lg:ml-6">
            INSTRUCTOR
          </p>
          <h1 className="ml-3 mt-1 font-serif text-2xl lg:ml-6 lg:text-3xl">
            {fName} {lName}
          </h1>
          <div className="mt-4 ml-3 mr-6 text-gray-400 lg:ml-6 lg:mr-6 lg:w-96">
            <p>
              {fName} {description}
            </p>
          </div>
          <div className="mt-6 ml-3 text-2xl font-bold text-green-700">
            <h1 className="font-serif">{price} per Session</h1>
          </div>
          <div className="mt-6 flex h-16 w-64 items-center justify-center lg:h-full lg:w-full">
            <button
              className="mb-1 flex h-9 w-56 items-center justify-center rounded-sm
            bg-green-700 text-white transition-all last-of-type:mb-0 hover:scale-105
            hover:cursor-pointer hover:bg-green-900 lg:h-20 lg:w-96"
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
    <div
      className="grid border-spacing-10 items-center
     justify-center gap-2 gap-x-96 bg-gray-400
    lg:flex lg:space-x-20"
    >
      <InstructorElement
        fName="Jo"
        lName="Michaels"
        description={firstDescription}
        price="£45"
        image={firstInstructor}
      />
      <InstructorElement
        fName="Michelle"
        lName="Yung"
        price="£75"
        description={secondDescription}
        image={secondInstructor}
      />
    </div>
  );
}

export default Instructors;
