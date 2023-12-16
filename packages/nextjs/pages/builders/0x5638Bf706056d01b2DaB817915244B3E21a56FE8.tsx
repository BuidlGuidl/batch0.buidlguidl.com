import { Address } from "~~/components/scaffold-eth";

const ProfilePage = () => {
  return (
    <section className="p-6 m-auto bg-base-100 rounded-lg shadow-xl flex justify-center items-center">
      <div className="flex flex-col items-center">
        <Address address="0x5638Bf706056d01b2DaB817915244B3E21a56FE8" size="3xl" />
        <p className="mt-6 text-center text-2xl">
          full stack dev <br /> excited to continue buidling together
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a target="_blank" href="https://github.com/jennyg0" className="hover:underline" rel="noreferrer">
            GitHub
          </a>
          <span className="bg-gray-400 h-5 w-px"></span>
          <a
            target="_blank"
            href="https://app.buidlguidl.com/builders/0x5638Bf706056d01b2DaB817915244B3E21a56FE8"
            className="hover:underline"
            rel="noreferrer"
          >
            BuidlGuidl
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
