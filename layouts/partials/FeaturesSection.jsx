import Image from "next/image";
import Link from "next/link";

const FeaturesSection = ({heading, list}) => {
  return (
    <section className="section bg-theme-light">
      <div className="container">
        <div className="text-center">
          <h2>{heading}</h2>
          <div className="w-1/4 mx-auto mt-1 h-1 bg-primary"/>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item, i) => (
            <div
              className="feature-card rounded-xl bg-white p-5 pb-8 text-center transition ease-in-out hover:-translate-y-1 hover:scale-110"
              key={`feature-${i}`}
            >
              <Image
                className="mx-auto"
                src={item.urlImage}
                width={80}
                height={80}
                alt=""
              />
              <div className="mt-4 flex justify-center items-center flex-col">
                <Link href={`/our-services/${item.url}`}>
                  <h5 className="hover:text-primary w-fit">{item.name}</h5>
                </Link>
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
