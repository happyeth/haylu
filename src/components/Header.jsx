import { createRoot } from 'react-dom/client';

const App = () => {
  return (

      <div className="flex bg-gray-500 flex-col items-center justify-center text-center space-y-1 p-4">
        {/* Company Name */}
        <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide uppercase">
          S.B.G GENERAL METAL ENGINEERING P.L.C
        </h1>

        {/* Amharic Text */}
        <p className="text-xs sm:text-sm font-medium text-gray-300">
          ኤ.ሲ.ቢ.ጂ. ጠቅላላ የብረት ስራ ኢንጂኔሪንግ ኃ/የተ/የግ/ማህበር
        </p>

        {/* Divider */}
        <div className="w-16 border-t-2 border-blue-400 my-1"></div>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-1 sm:space-y-0 text-xs sm:text-sm font-light text-gray-400">
          <div className="flex items-center space-x-1">
            <span className="text-sm">📞</span>
            <span>+251-911-225-990</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm">📞</span>
            <span>+251-911-128-814</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm">📠</span>
            <span>Fax 0114-42 16 01</span>
          </div>
        </div>
        
        {/* Email */}
        <p className="text-xs sm:text-sm font-light text-gray-400 pt-0.5">
          E-mail:{" "}
          <a
            href="mailto:ksmon369@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            ksmon369@gmail.com
          </a>
        </p>
      </div>
  
  );
};

// Standard Vite rendering
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

export default App;