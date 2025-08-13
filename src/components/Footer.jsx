const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            RNZ
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="text-sm text-gray-400">
              © 2025 All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

