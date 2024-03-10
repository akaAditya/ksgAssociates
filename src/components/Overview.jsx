/** @format */

const Overview = () => {
  const data = [
    {
      image: "/images/h1.jpg",
      title: "Real E-State",
      Description: `At our Real Estate Services, we're dedicated to turning your dream of the ideal apartment or flat into a reality. We can assist you if you are looking for a pleasant apartment or a professional property investor. Our team of professional offers personalized assistance at every level of the complex real estate market. Dedicated to transparency, dependability, and contentment, we guarantee that your journey to your dream apartment or flat is a seamless and enjoyable experience.`,
    },
    {
      image: "/images/h2.jpg",
      title: "Construction",
      Description: `If you're aiming for a single-family dream home or a sleek, modern duplex, we can bring your vision to life in a living environment. Backed by a team of proficient experts and a dedication to excellence, we're proud to transform your ideas into reality. We manage each phase of construction with accuracy and care, from the beginning to the final details. Whether it's a duplex or a single home, we're committed to meeting and even beyond your expectations with our work.`,
    },
    {
      image: "/images/h3.jpg",
      title: "Training & Placement",
      Description: `We are proud to provide excellent training and placement services. Our expertise extends to various sectors, including banking and government outsourcing, ensuring that individuals and organizations are well-equipped for success. Our specialized training programs equip individuals with the information and abilities to prosper in such exceedingly competitive sectors. Simultaneously, our placement services bridge the gap between talent and opportunity, connecting qualified professionals with positions that align with their career goals.`,
    },
    {
      image: "/images/h4.jpg",
      title: "Banking and Services",
      Description: `Our financial services cater to your unique needs, whether it's funding your dreams with a loan, managing everyday expenses with a convenient credit card, ensuring your future with insurance, fulfill other loan need through a mortgage, or investing in real estate ventures with a property loan. Our dedicated team crafts personalized solutions that match your individual requirements. Count on us for competitive rates, transparency, and top-notch customer service.`,
    },
  ];
  return (
    <div className="mx-auto px-4 lg:px-8 xl:px-0 max-w-screen-xl">
      <section className="text-gray-800 body-font overflow-hidden font-medium">
        <div className="container py-24 mx-auto md:max-w-5xl">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row mb-8 justify-center md:justify-start"
            >
              <div className="md:w-3/4 md:mr-4">
                <img
                  src={item.image}
                  alt="img"
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                />
              </div>
              <div className="md:w-3/4 p-4 md:pl-0 md:pt-0 md:pb-0 md:mt-0 md:ml-8">
                <h2 className="text-2xl font-medium text-gray-900 mb-2">
                  {item.title}
                </h2>
                <p className="leading-relaxed mb-4">{item.Description}</p>
                <a
                  href="#"
                  className="text-slate-100 inline-flex items-center bg-slate-500 py-2 px-4 rounded-sm hover:bg-slate-600 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Overview;
