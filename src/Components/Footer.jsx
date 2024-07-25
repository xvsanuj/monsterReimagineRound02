import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
      <div className='w-full min-h-[90vh] flex flex-col px-6 lg:flex-row'>
        <div className='w-full lg:w-[70%] h-full flex flex-col lg:flex-row pl-4 lg:pl-20 pt-8 lg:pt-16'>
          <div className='w-full lg:w-[20%] mb-6 lg:mb-0 footer-column'>
            <h1 className='lg:text-lg text-3xl pb-2 lg:pb-0 font-semibold tracking-tighter'>Support</h1>
            <p className='text-sm py-2 link w-fit'>Online Help</p>
            <p className='text-sm py-2 link w-fit'>Customer Service</p>
            <p className='text-sm py-2 link w-fit'>Shipping FAQ</p>
            <p className='text-sm py-2 link w-fit'>Warranty</p>
            <p className='text-sm py-2 link w-fit'>Mi Exchange</p>
            <p className='text-sm py-2 link w-fit'>Bulk Orders</p>
            <p className='text-sm py-2 link w-fit'>User Guide</p>
            <p className='text-sm py-2 link w-fit'>Laptop Drivers</p>
            <p className='text-sm py-2 link w-fit'>Mi Screen Protect</p>
            <p className='text-sm py-2 link w-fit'>Mi Complete Protect</p>
            <p className='text-sm py-2 link w-fit'>Certification</p>
            <p className='text-sm py-2 link w-fit'>Service Centre</p>
            <p className='text-sm py-2 link w-fit'>Xiaomi Easy Service</p>
          </div>
          <div className='w-full lg:w-[20%] mb-6 lg:mb-0 footer-column'>
            <h1 className='lg:text-lg text-3xl pb-2 lg:pb-0 font-semibold tracking-tighter'>Shop And Learn</h1>
            <p className='text-sm py-2 link w-fit'>Xiaomi Phones</p>
            <p className='text-sm py-2 link w-fit'>Redmi Phones</p>
            <p className='text-sm py-2 link w-fit'>TV's</p>
            <p className='text-sm py-2 link w-fit'>Laptops And Tablets</p>
            <p className='text-sm py-2 link w-fit'>Audio</p>
            <p className='text-sm py-2 link w-fit'>LifeStyle</p>
            <p className='text-sm py-2 link w-fit'>Smart Home</p>
          </div>
          <div className='w-full lg:w-[20%] mb-6 lg:mb-0 footer-column'>
            <h1 className='lg:text-lg text-3xl pb-2 lg:pb-0 font-semibold tracking-tighter'>Retail Store</h1>
            <p className='text-sm py-2 link w-fit'>Mi Home</p>
            <p className='text-sm py-2 link w-fit'>Mi Authorized Store</p>
            <p className='text-sm py-2 link w-fit'>Mi Store Franchise</p>
          </div>
          <div className='w-full lg:w-[20%] footer-column'>
            <h1 className='lg:text-lg text-3xl pb-2 lg:pb-0 font-semibold tracking-tighter'>About</h1>
            <p className='text-sm py-2 link w-fit'>Xiaomi</p>
            <p className='text-sm py-2 link w-fit'>Privacy Policy</p>
            <p className='text-sm py-2 link w-fit'>User Agreement</p>
            <p className='text-sm py-2 link w-fit'>Integrity And Compliance</p>
            <p className='text-sm py-2 link w-fit'>CSR And Disclosures</p>
            <p className='text-sm py-2 link w-fit'>E-Waste Management</p>
            <p className='text-sm py-2 link w-fit'>In The Past</p>
            <p className='text-sm py-2 link w-fit'>Trust Center</p>
            <p className='text-sm py-2 link w-fit'>Culture</p>
            <p className='text-sm py-2 link w-fit'>Smartphone Quality</p>
            <p className='text-sm py-2 link w-fit'>TV Quality</p>
            <p className='text-sm py-2 link w-fit'>Service Quality</p>
            <p className='text-sm py-2 link w-fit'>Xiaomi HyperOS</p>
            <p className='text-sm py-2 link w-fit'>Join Our Team</p>
          </div>
        </div>
        <div className='w-full lg:w-[30%] h-full flex flex-col items-start px-4 lg:px-0'>
          <h1 className='lg:text-lg text-3xl pb-2 lg:pb-0 pt-8 lg:pt-16 font-semibold tracking-tighter'>Follow Mi</h1>
          <div className="flex items-center gap-4 py-4 pb-14 lg:pb-0">
            <FaFacebook className="text-black text-xl"/>
            <FaXTwitter className="text-black text-xl"/>
            <RiInstagramFill className="text-black text-xl"/>
          </div>
          <h1 className='lg:text-lg hidden lg:block pb-2 lg:pb-0 pt-8 font-semibold tracking-tighter'>Let's Stay in Touch</h1>
          <input className="px-4 hidden lg:block w-full lg:w-96 rounded-xl mt-3 py-2 border-[1px]" type="text" placeholder="Enter email address"/>
          <div className="border-[1px] hidden lg:flex w-full lg:w-96 p-4 rounded-xl mt-3 flex-col lg:flex-row items-center lg:items-start gap-4">
            <img className="rounded-xl w-full lg:w-1/3" src="https://i03.appmifile.com/32_operator_in/22/11/2022/9b4d58f78a203b82a56bdd11692d4ba1.png" alt="Get Mi Store App" />
            <div className="text-center lg:text-left">
              <h1 className="text-lg font-semibold tracking-tighter">Get Mi Store App</h1>
              <p className="text-xs font-semibold pt-2">Scan for our up-to-date information for better shopping experience</p>
              <button className="text-xs font-semibold bg-white px-6 py-2 text-black rounded-lg mt-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;