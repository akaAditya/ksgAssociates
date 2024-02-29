/** @format */

const Overview = () => {
    const data = [
        {
            image: '/images/h1.jpg',
            title: 'Real E-State',
            Description:`Glossier echo park pug, church-key sartorial biodiesel
            vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
            moon party messenger bag selfies, poke vaporware kombucha
            lumbersexual pork belly polaroid hoodie portland craft beer.`
        },
        {
            image: '/images/h2.jpg',
            title: 'Construction',
            Description:`Glossier echo park pug, church-key sartorial biodiesel
            vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
            moon party messenger bag selfies, poke vaporware kombucha
            lumbersexual pork belly polaroid hoodie portland craft beer.`
        },
        {
            image: '/images/h3.jpg',
            title: 'Training & Placement',
            Description:`Glossier echo park pug, church-key sartorial biodiesel
            vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
            moon party messenger bag selfies, poke vaporware kombucha
            lumbersexual pork belly polaroid hoodie portland craft beer.`
        },
        {
            image: '/images/h4.jpg',
            title: 'Banking and Services',
            Description:`Glossier echo park pug, church-key sartorial biodiesel
            vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
            moon party messenger bag selfies, poke vaporware kombucha
            lumbersexual pork belly polaroid hoodie portland craft beer.`
        }
    ]
  return (
    <div className="mx-auto px-4 lg:px-8 xl:px-0 max-w-screen-xl">
  <section className="text-gray-600 body-font overflow-hidden">
    <div className="container py-24 mx-auto md:max-w-4xl">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row mb-8 justify-center md:justify-start">
          <div className="md:w-1/3 md:mr-4">
            <img src={item.image} alt="img" className="w-full h-auto object-cover" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              {item.title}
            </h2>
            <p className="leading-relaxed mb-4">
              {item.Description}
            </p>
            <a href="#" className="text-slate-100 inline-flex items-center bg-slate-700 py-2 px-4 rounded-sm hover:bg-slate-500 transition-colors">
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
