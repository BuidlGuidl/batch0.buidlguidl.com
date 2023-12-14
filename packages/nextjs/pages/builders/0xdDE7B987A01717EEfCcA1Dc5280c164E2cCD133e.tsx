import Link from "next/link";
import { Address } from "~~/components/scaffold-eth";

const socials = [
  {
    link: "https://github.com/Chinwuba22",
    title: "Github",
  },
  {
    link: "https://twitter.com/Uba__X",
    title: "Twitter",
  },
];

const MyProfile = () => {
  return (
    <section className="flex justify-center items-center mt-10">
      <div className="border flex gap-6 flex-col w-96 items-center border-white rounded-md p-5">
        <Address address="0xdDE7B987A01717EEfCcA1Dc5280c164E2cCD133e" size="3xl" />
        <p className="text-center">
          {" "}
          Curently exploring blockchain tech with key focus on security researching and building. Currently undergoing
          the speedrun ethereum knowledge to help improve my building skills as well as connect with other like minded
          individuals.{" "}
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

export default MyProfile;
