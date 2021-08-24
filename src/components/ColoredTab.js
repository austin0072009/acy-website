import { useMediaPredicate } from "react-media-hook";

const ColoredTab = () => {
  let smallerThan568 = useMediaPredicate("(max-width: 567px)");

  return (
    <div className="flex flex-col bg-gov-bg bg-cover text-gray-100 rounded-3xl py-4 md:py-10 px-4 md:px-12 justify-between mb-3">
      <div
        className="font-medium"
        style={{ fontSize: smallerThan568 ? 24 : 32 }}
      >
        Governed by the community
      </div>

      <div className="mb-5" style={{ fontSize: smallerThan568 ? 16 : 24 }}>
        The ACY Protocol is governed by a decentralized community of ACY token
        holders and their delegates who propose and vote on upgrades to the
        protocol.
      </div>
      <div className="filter hover:brightness-200 cursor-pointer">
        <span className="px-5 py-1 text-xl border-solid border-1 border border-gray-100 rounded-3xl font-medium">
          Read More
        </span>
      </div>
    </div>
  );
};

export default ColoredTab;
