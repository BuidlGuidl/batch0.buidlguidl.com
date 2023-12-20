import Image from "next/image";
import Link from "next/link";
import { Address } from "~~/components/scaffold-eth";

const socials = [
  {
    link: "https://github.com/deevinefayvour",
    title: "github",
  },
  {
    link: "https://twitter.com/I_am_zoeydee",
    title: "twitter",
  },
];

const ProfilePage = () => {
  return (
    <section className="flex justify-center items-center mt-10">
      <div className="border flex gap-3 flex-col w-96 items-center border-white rounded-md p-5">
        <Image src="/avatars/avatar-zoey.png" width={200} height={200} alt="yan's profile avatar on buildguild" />
        <Address address="0xFC7BC662fA06137F769366A46B19924371E880bd" size="xl" />
        <p className="text-center mx-5">
            I am a DevOps Engineer and I got passionate about solidity.
        </p>
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
