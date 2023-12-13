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
            <Image src="/avatars/james-orb-small.png" width={200} height={200} alt="James' avatar" />
          </figure>
          <div className="card-body items-center text-center">
            <Address size="lg" address="0x63A32F1595a68E811496D820680B74A5ccA303c5" />
            <p className="text-xl">Following my heart and building with love.</p>
            <div className="flex ">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/positonic" className="link px-3">
                GitHub
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://x.com/positonic" className="link px-3">
                <table>x.com</table>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.buidlguidl.com/builders/0x63A32F1595a68E811496D820680B74A5ccA303c5"
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
