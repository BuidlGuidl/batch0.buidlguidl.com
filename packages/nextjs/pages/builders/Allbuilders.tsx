import Link from "next/link";
import { Address } from "~~/components/scaffold-eth";

const AllBuilders = [
  "0xF51cFA5eb9128F064eafb75524502A039F063D91",
  "0xdDE7B987A01717EEfCcA1Dc5280c164E2cCD133e",
  "0x38D9cFf58D233AF0B9c1434EEDE012009D23c971",
  "0xfbce2693fbed73e3d464d662235dc5adc5454c01",
  //"0x5638bf706056d01b2dab817915244b3e21a56fe8",
  //"0xc863dfee737c803c93af4b6b27029294f6a56eb5",
  //"0x0235008236ca99e4dbcaa234c1065db7c91afeac",
  //"0xfc7bc662fa06137f769366a46b19924371e880bd",
  //"0x63191383edbd8531c442868d87555f1ea2f6ad4e",
  //"0x63a32f1595a68e811496d820680b74a5cca303c5",
  //"0xca6894423940ab96828c50cc97a9f24b5e7c8016",
  //"0xd6c7be821cbf10af04c297b35e67552081c6bce9",
  //"0xe4a98d2bfd66ce08128fdfffc9070662e489a28e",
  //"0x1e7aabb9d0c701208e875131d0a1cfcdaba79350",  ADDRESSES WILL BE UNCOMMENTED WHEN THEY MAKE AN UPLOAD
];

const fileExists = (address: string) => {
  return true;
};

const Allbuilders = () => {
  return (
    <section className=" text-center mt-10">
      <h1 className="text-2xl font-bold mb-4">
        Click any of the addresses Below To Navigate to the Profile of Each builder
      </h1>
      <ul className=" link grid grid-cols-1 gap-4">
        {AllBuilders.map(builderAddress => (
          <li key={builderAddress} bg-gray-200 p-4 rounded-md>
            {fileExists(builderAddress) ? (
              <Link href={`${builderAddress.toString()}`}>{builderAddress}</Link>
            ) : (
              <span>Builder is yet to upload a personal page</span>
            )}
          </li>
        ))}
      </ul>
      <h2 className="font-bold gap-2 text-2xl mt-8">Other Builders profile would be updated with time....</h2>
    </section>
  );
};

export default Allbuilders;
