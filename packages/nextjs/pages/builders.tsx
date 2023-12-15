import { NextPage } from "next";
import { Spinner } from "~~/components/assets/Spinner";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth/useScaffoldEventHistory";

const BuildersList: NextPage = () => {
  const { data: buildersList, isLoading: isBuildersListLoading } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 113342437n,
  });

  const spinner = (
    <div className="my-24 flex justify-center">
      <Spinner width="50" height="50" />
    </div>
  );

  const builderTile = (address: string) => {
    return (
      <a
        key={address}
        href={`/builders/${address}`}
        className="px-4 py-2 flex justify-center rounded hover:ring-2 transition duration-300 ease-in-out"
      >
        <Address disableAddressLink={true} size="lg" format="long" address={address} />
      </a>
    );
  };

  return (
    <div className="mt-16 flex items-center justify-center">
      <div className="container md:max-w-xl mx-4 shadow-xl rounded-lg">
        <h2 className="flex justify-center font-mono rounded-t-lg text-lg font-bold py-2 bg-base-300">
          👷‍♂️ Builders 🔨
        </h2>
        {isBuildersListLoading ? (
          spinner
        ) : (
          <div className="flex flex-col">{buildersList?.map(builder => builderTile(builder.args[1]))}</div>
        )}
      </div>
    </div>
  );
};

export default BuildersList;
