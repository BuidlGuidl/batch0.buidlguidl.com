import Link from "next/link";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const socials = [
  {
    link: "https://github.com/swolidity",
    title: "github",
  },
  {
    link: "https://twitter.com/swolidity",
    title: "twitter",
  },
  {
    link: "https://swolidity.com",
    title: "website",
  },
];

const PersonalPage: NextPage = () => {
  return (
    <div className="mt-16 flex items-center justify-center">
      <div className="bg-base-100 p-8 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-200 ease-in-out">
        <Address address="0xcA6894423940aB96828C50CC97a9F24b5E7c8016" size="3xl" />
        <div className="flex flex-col md:flex-row mt-2">
          <div className="py-4">
            {socials.map(social => (
              <div key={social.title}>
                <Link target="_blank" className="text-blue-300 underline" href={social.link}>
                  {social.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="border-r border-base-300 mx-8"></div>

          <div className="flex-grow-1 w-48 md:w-80 rounded p-4 transition-shadow duration-500 ease-in-out">
            <p className="text-center">Interested in all things Web3, NFT&apos;s, and Fitness.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
