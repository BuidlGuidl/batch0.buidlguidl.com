import Image from "next/image";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const PersonalPage: NextPage = () => {
  return (
    <>
      <div className="flex justify-center content-center pt-6">
        <p className="mt-3 base-300 text-sm font-mono font-semibold"></p>
        <div className="card w-80 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <Image src="/avatars/avatar-yan.png" width={200} height={200} alt="yan's profile avatar on buildguild" />
          </figure>
          <div className="card-body items-center text-center">
            <Address size="lg" address="0xF51cFA5eb9128F064eafb75524502A039F063D91" />
            <p className="text-xl">Building the future.</p>
            <div className="flex ">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/YanVictorSN" className="link px-3">
                GitHub
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.buidlguidl.com/builders/0xF51cFA5eb9128F064eafb75524502A039F063D91"
                className="link px-3"
              >
                BuildlGuildl
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalPage;
