import Link from "next/link";
import { Address } from "~~/components/scaffold-eth";

const socials = [
  {
    link: "https://github.com/miralsuthar",
    title: "github",
  },
  {
    link: "https://twitter.com/miral182000",
    title: "twitter",
  },
  {
    link: "https://miralst.xyz",
    title: "website",
  },
];

const ProfilePage = () => {
  return (
    <section className="flex justify-center items-center mt-10">
      <div className="border flex gap-6 flex-col w-96 items-center border-white rounded-md p-5">
        <Address address="0x38D9cFf58D233AF0B9c1434EEDE012009D23c971" size="3xl" />
        <p className="text-center">I am frontend engineer. Love to build stuff onChain.</p>
        <div className="flex justify-around items-center w-full">
          {socials.map(social => (
            <Link className="text-blue-300 underline" key={social.title} href={social.link}>
              {social.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
