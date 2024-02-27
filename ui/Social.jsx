import { FaTwitter, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

function Social() {
  return (
    <div className="flex justify-center items-end ">
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 mx-0"
      >
        <FaTwitter className="w-3 h-6 " />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700 mx-0"
      >
        <FaInstagram className="w-3 h-6  " />
      </a>
      <a
        href="https://www.facebook.com/Wii Dan"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900 mx-0"
      >
        <FaFacebook className="w-3 h-6  " />
      </a>
      <a
        href="https://github.com/WinsaDaniel"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-700 hover:text-gray-900 mx-0"
      >
        <FaGithub className="w-3 h-6  " />
      </a>
    </div>
  );
}

export default Social;
