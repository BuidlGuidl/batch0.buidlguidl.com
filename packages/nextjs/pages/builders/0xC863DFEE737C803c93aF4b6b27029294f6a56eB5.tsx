import Link from "next/link";
import { Address } from "~~/components/scaffold-eth";

const socials = [
  {
    link: "https://github.com/iafhurtado",
    title: "github",
  },
  {
    link: "https://twitter.com/iafhurtado",
    title: "twitter",
  },
  {
    link: "https://portfolio-iafhurtado.vercel.app/",
    title: "website",
  },
];

const ProfilePage = () => {
  return (
    <section className="flex justify-center items-center mt-10">
      <div className="border flex gap-6 flex-col w-96 items-center border-white rounded-md p-5">
        <Address address="0xC863DFEE737C803c93aF4b6b27029294f6a56eB5" size="3xl" />
        <p className="text-center">
          Im a product manager and UX freelancer aiming to get deep on-chain and Frontend expertise
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
