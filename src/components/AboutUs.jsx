const AboutUs = () => {
  return (
    <section className=" body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/images/aboutUs.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            <strong>Who </strong>We Are?
          </h1>
          <p className="mb-8 leading-relaxed text-gray-900">
            Welcome to KSG-Associates, where our expertise spans across various
            fields. Within the real estate industry, we provide an extensive
            selection of apartments and flats. Our Construction division
            specializes in building single and duplex homes, adding the essence
            of luxury to your life. Furthermore, our Training and placement
            services extend to banking and government outsourcing, preparing you
            for a successful career. We also provide tailored solutions for
            loans, credit cards, insurance, mortgages, and property loans.
            KSG-Associates: Your comprehensive partner for all your property,
            construction, training, and financial needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
