const Footer = () => {
  return (
    <footer className="bg-blue-900 dark:bg-gray-900 text-white">
      <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        <a href="#">
          <div className="text-2xl font-bold text-white">Hotel Booking</div>
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
          <a
            href="#"
            className="text-sm transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Overview
          </a>

          <a
            href="#"
            className="text-sm transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Features
          </a>

          <a
            href="#"
            className="text-sm transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-sm transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Careers
          </a>

          <a
            href="#"
            className="text-sm transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Help
          </a>

          <a
            href="#"
            className="text-sm transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Privacy
          </a>
        </div>

        <p className="mt-6 text-sm  lg:mt-0 dark:text-gray-400">
          © Copyright 2023 Meraki UI.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
