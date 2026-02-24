import Image from "next/image";

const SocialSectinData = [
  {
    title: "Practical Support at Farm Level",
    src: "/csr/csr-1.jpg",
    description:
      "Beyond financing, Vicago actively supports farmers through access to agricultural inputs, including agrochemicals and farm essentials that directly improve yields and crop quality. \n\n By addressing real operational needs at the farm level, we help suppliers increase productivity, improve income stability, and maintain consistent quality standards, outcomes that benefit both producers and global buyers.",
  },
  {
    title: "Supporting Existing Stakeholders",
    src: "/csr/csr-2.jpg",
    description:
      "We work closely with farmers, cooperatives, and local buying agents, providing stability, access, and long-term partnership rather than transactional engagement. Through structured pre-financing and trade advances, we have provided over USD 5 million in cocoa advances to farmers and suppliers, improving liquidity, productivity, and supply consistency across our sourcing network. \n\n This approach enables our partners to plan, invest, and grow, while ensuring reliability across our supply chain.",
  },
  {
    title: "Women in Farming",
    src: "/csr/csr-3.jpg",
    description:
      "Women are central to cocoa production, yet often lack access to resources. Vicago supports women farmers by providing practical farm-level assistance, access to inputs, and inclusion in our sourcing and pre-financing programs. \n\n By improving productivity and income stability, we help strengthen livelihoods and enhance the quality of life within cocoa-farming households and communities.",
  },
];

const SocialSection = () => {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden bg-white text-gray-900">
      <div className=" max-out relative z-10 h-full flex flex-col justify-center gap-20 items-start max-margin py-20">
        <div className="w-full  space-y-4 flex justify-between items-end">
          <h2 className="max-w-md text-vgreen text-3xl md:text-6xl font-light mb-0">
            Social responsibility
          </h2>
          <p className="sustain-text text-lg text-gray-500 max-w-sm">
            Our Approach to Sustainable and Responsible Trade
          </p>
        </div>
        <div className="h-full w-full ">
          {SocialSectinData.map((item, i) => (
            <SocialEach key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SocialEach = ({ item }: any) => {
  return (
    <div className="flex justify-between items-center py-6 border-t-2 border-gray-200">
      <div className="flex flex-col items-start gap-4">
        <h3 className="text-3xl font-medium text-vgbrown ">{item.title}</h3>
        <p className="text-sm font-light text-gray-500 leading-relaxed max-w-xl">
          {item.description}
        </p>
      </div>
      <div className="relative overflow-hidden h-70 aspect-video rounded-xl hover-lift ">
        <Image
          src={item.src}
          alt="image"
          fill
          className="object-cover w-auto h-auto"
        />
      </div>
    </div>
  );
};
