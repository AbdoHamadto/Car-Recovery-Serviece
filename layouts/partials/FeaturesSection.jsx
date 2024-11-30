import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const FeaturesSection = ({heading, paragraph, list}) => {
  return (
    <section className="section bg-theme-light">
      <div className="container">
        <div className="text-center">
          <h2>{heading}</h2>
          <p>{paragraph}</p>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item, i) => (
            <div
              className="feature-card rounded-xl bg-white p-5 pb-8 text-center transition ease-in-out hover:-translate-y-1 hover:scale-110"
              key={`feature-${i}`}
            >
              <Image
                className="mx-auto"
                src='/images/towing-vehicle.png'
                width={80}
                height={80}
                alt=""
              />
              <div className="mt-4">
                {markdownify(item.name, "h3", "h5")}
                <p className="mt-3">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
