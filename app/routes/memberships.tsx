interface MembershipProps {
  Heading: string;
  Description: string;
  Price: string;
}

const MembershipElement = ({
  Heading,
  Description,
  Price,
}: MembershipProps) => {
  return (
    <div className="min-h-50 bg-amber-200 p-4">
      <ul className="mx-auto max-w-xl p-4">
        <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
          <h2 className="mb-4 font-serif text-2xl font-extrabold tracking-wide text-green-900">
            {Heading}
          </h2>
          <dl>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Description
            </dt>
            <dd className="mb-3 text-neutral-600">{Description}</dd>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Price
            </dt>
            <dd className="mb-3 font-serif text-xl font-extrabold text-red-800">
              {Price}
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  );
};

export default function Memberships() {
  return (
    <div className="min-h-50 bg-amber-200">
      <h1 className="mb-4 text-center font-serif text-4xl font-extrabold text-red-900">
        Memberships
      </h1>
      <MembershipElement
        Heading="basic"
        Description="this is description"
        Price="£25"
      />
      <MembershipElement
        Heading="intermidiate"
        Description="this is more description"
        Price="£35"
      />
      <MembershipElement
        Heading="advanced"
        Description="this is more more description"
        Price="£55"
      />
    </div>
  );
}
