import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-xl font-semibold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle> Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub> Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Find Us On</h2>
        <a
          href=""
          className="p-4 flex text-lg items-center border rounded-t-lg"
        >
          <FaFacebook className="mr-3"></FaFacebook>
          Facebook
        </a>
        <a href="" className="p-4 flex text-lg items-center border-x">
          <FaTwitter className="mr-3"></FaTwitter>
          Twitter
        </a>
        <a
          href=""
          className="p-4 flex text-lg items-center border rounded-b-lg"
        >
          <FaInstagram className="mr-3"></FaInstagram>
          Instagram
        </a>
      </div>
    </div>
  );
};

export default RightSideNav;
