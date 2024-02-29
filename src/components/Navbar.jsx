/** @format */

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">
              <img
                src="/public/ksg-associates-logo.png"
                className="h-16 w-48"
              />
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">About</a>
            <a className="mr-5 hover:text-gray-900">Our Services</a>
            <a className="mr-5 hover:text-gray-900">Contact-Us</a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
