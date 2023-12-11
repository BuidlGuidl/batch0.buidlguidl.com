import { NextPage } from "next";

const PersonalPage: NextPage = () => {
  const leftPanel = (
    <div className="">
      {/* eslint-disable @next/next/no-img-element */}
      <img
        className="avatar w-32 h-32 rounded shadow-md hover:shadow-2xl transition-shadow duration-200 ease-in-out"
        alt="solo1g"
        src="https://pbs.twimg.com/profile_images/1728892135079100416/NKrn1Dr1_400x400.jpg"
      />
      <p className="mt-3 base-300 text-sm font-mono font-semibold">
        <a className="hover:underline" href="https://twitter.com/solo1g">
          @solo1g
        </a>
        <br />
        <a
          className="hover:underline"
          href="https://app.buidlguidl.com/builders/0xfbCE2693FBEd73E3D464d662235DC5ADC5454C01"
        >
          solo1g.eth
        </a>
      </p>
    </div>
  );

  const rightPanel = (
    <div className="flex-grow-1 w-48 md:w-80 hover:ring-2 rounded p-4 ransition-shadow duration-500 ease-in-out">
      <h1 className="text-2xl font-bold base-100">Hi!</h1>
      <p className="font-sm">
        {`I've started with SpeedRunEthereum challenges just a few days back so super new to the space, but it's been fun so far. 
          Hoping to learn more with everyone.`}
      </p>
    </div>
  );

  return (
    <div className="mt-16 flex items-center justify-center">
      <div className="bg-base-100 p-8 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-200 ease-in-out">
        <div className="flex flex-col md:flex-row">
          {leftPanel}
          <div className="border-r border-base-300 mx-8"></div>
          {rightPanel}
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
