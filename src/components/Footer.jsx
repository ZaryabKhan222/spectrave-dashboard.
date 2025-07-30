const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Spectrave Dashboard. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            Website
          </a>
          <a
            href="mailto:support@spectrave.com"
            className="hover:text-blue-600 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
