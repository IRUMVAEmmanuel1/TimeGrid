import React from 'react'
import {Link} from 'react-router-dom';
import Header from './Header'
import t2 from './imgs/illustration-features-tab-2.png'
import t3 from './imgs/illustration-features-tab-3.png'
import chrome from './imgs/logo-chrome.svg'
import opera from './imgs/logo-opera.svg'
import mozila from './imgs/logo-firefox.svg'
import whito from './imgs/logo-bookmark-white.png'
import teamer from '../assets/team.jpg'
import  collabo from './imgs/undraw_project_team_lc5a.svg'
function Land() {
    return (
       <div>
   <Header />
  {/* Hero */}
  <section className="relative">
    <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 ml-12 mt-14 lg:mt-28">
      {/* Content */}
      <div className="flex flex-1 flex-col items-center lg:items-start">
        <h2 className="text-bookmark-blue text-2xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
          A Time Grid helps teams move work forward.
        </h2>
        <p className="text-bookmark-grey text-center lg:text-left mb-6">
        Collaborate, manage projects, and reach new productivity peaks. <br />
        From high rises to the home office, the way your team works is unique—accomplish it all with Time grid.
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          <button type="button" className="btn text-white bold bg-blue-600 hover:bg-purple-700 hover:text-white shadow-md py-3 px-6 rounded-md transform transition-all hover:scale-110 duration-100">
            <Link to='/Login'>Start Now</Link>
          </button>
          <button type="button" className="btn text-white bold bg-blue-600 hover:bg-purple-700 hover:text-white shadow-md py-3 px-6 rounded-md transform transition-all hover:scale-110 duration-100">
            <Link to='/Login'>Sign Up-It's free!here</Link>
          </button>
        </div>
      </div>
      {/* Image */}
      <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
      <img  src={teamer} alt="white" className="transform transition-all hover:scale-110" />
      </div>
    </div>
    {/* Rounded Rectangle */}
    
  </section>
  {/* Features */}
  <section className=" relative bg-bookmark-white ml-12 py-20 mt-20 lg:mt-60">
    {/* Heading */}
    <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
      <h1 className="text-3xl text-center text-bookmark-blue">Features</h1>
      <p className="text-center text-bookmark-grey mt-4">
        Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between
        your devices so you can access them on the go.
      </p>
    </div>
    {/* Feature #1 */}
    <div className="relative mt-20 lg:mt-24">
      <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
        {/* Image */}
        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={collabo} alt="tab1" />
        </div>
        {/* Content */}
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h1 className="text-3xl text-bookmark-blue">Time grid in one click</h1>
          <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
            Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control
            over how you manage your favourite sites.
          </p>
          <button type="button" className="btn bg-blue-600 text-white hover:bg-bookmark-white hover:text-black shadow-md py-3 px-6 rounded-md transition duration-300">More Info</button>
        </div>
      </div>
      {/* Rounded Rectangle */}
      <div className="
        hidden
        lg:block
        overflow-hidden
        bg-bookmark-purple
        rounded-r-full
        absolute
        h-80
        w-2/4
        -bottom-24
        -left-36
      " />
    </div>
    {/* Feature #2 */}
    <div className="relative mt-20 lg:mt-52">
      <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
        {/* Image */}
        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={t2} alt="hy" />
        </div>
        {/* Content */}
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h1 className="text-3xl text-bookmark-blue">Intelligent search</h1>
          <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
            Our powerful search feature will help you find saved sites in no time at all. No need to crawl through all
            of your bookmarks.
          </p>
          <button type="button" className="btn bg-blue-600 text-white hover:bg-bookmark-white hover:text-black shadow-md py-3 px-6 rounded-md transition duration-300">More Info</button>
        </div>
      </div>
      {/* Rounded Rectangle */}
      <div className="
        hidden
        lg:block
        overflow-hidden
        bg-bookmark-purple
        rounded-l-full
        absolute
        h-80
        w-2/4
        -bottom-24
        -right-36
      " />
    </div>
    {/* Feature #3 */}
    <div className="relative ml-12 mt-20 lg:mt-52">
      <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
        {/* Image */}
        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={t3} alt="tab3" />
        </div>
        {/* Content */}
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h1 className="text-3xl text-bookmark-blue">Share your Workspace</h1>
          <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
            Easily share your Project Task and collections with others. Create a shareable link that you can send at the
            click of a button.
          </p>
          <button type="button" className="btn bg-blue-600 text-white hover:bg-bookmark-white hover:text-black shadow-md py-3 px-6 rounded-md transition duration-300">More Info</button>
        </div>
      </div>
      {/* Rounded Rectangle */}
      <div className="
        hidden
        lg:block
        overflow-hidden
        bg-bookmark-purple
        rounded-r-full
        absolute
        h-80
        w-2/4
        -bottom-24
        -left-36
      " />
    </div>
  </section>
  {/* Download */}
  <section className="py-20 ml-12 mt-20">
    {/* Heading */}
    <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
      <h1 className="text-3xl text-center text-bookmark-blue">Download the extension</h1>
      <p className="text-center text-bookmark-grey mt-4">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to
        prioritize.
      </p>
    </div>
    {/* Cards */}
    <div className="container grid grid-cols-1 ml-36 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
      {/* Card 1 */}
      <div className="flex flex-col rounded-md shadow-md lg:mb-16">
        <div className="p-6 flex flex-col items-center">
          <img src={chrome} alt="chrome" />
          <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Add to Chrome</h3>
          <p className="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
        </div>
        <hr className="border-b border-bookmark-white" />
        <div className="flex p-6">
          <button type="button" className="flex-1 btn bg-blue-600 text-white hover:bg-bookmark-white hover:text-black shadow-md py-3 px-6 rounded-md transition duration-300">
            Add &amp; Install Extension
          </button>
        </div>
      </div>
      {/* Card 2 */}
      <div className="flex flex-col rounded-md shadow-md lg:my-8">
        <div className="p-6 flex flex-col items-center">
          <img src={mozila} alt ="firefox" />
          <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Add to Firefox</h3>
          <p className="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
        </div>
        <hr className="border-b border-bookmark-white" />
        <div className="flex p-6">
          <button type="button" className="flex-1 btn bg-blue-600 text-white hover:bg-bookmark-white hover:text-black shadow-md py-3 px-6 rounded-md transition duration-300">
            Add &amp; Install Extension
          </button>
        </div>
      </div>
      {/* Card 3 */}
      <div className="flex flex-col rounded-md shadow-md lg:mt-16">
        <div className="p-6 flex flex-col items-center">
          <img src={opera} alt="opera" />
          <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Add to Opera</h3>
          <p className="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
        </div>
        <hr className="border-b border-bookmark-white" />
        <div className="flex p-6">
          <button type="button" className="flex-1 btn bg-blue-600 text-white hover:bg-bookmark-white hover:text-black shadow-md py-3 px-6 rounded-md transition duration-300">
            Add &amp; Install Extension
          </button>
        </div>
      </div>
    </div>
  </section>
  {/* FAQ */}
  <section className="bg-bookmark-white py-20">
    <div className="container">
      {/* Heading */}
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl text-center text-bookmark-blue">Frequently Asked Questions</h1>
        <p className="text-center text-bookmark-grey mt-4">
          Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
        </p>
      </div>
      {/* FAQ Items */}
      <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
        <div className="flex items-center border-b py-4">
          <span className="flex-1">What is a Bookmark?</span>
          <i className="text-bookmark-purple fas fa-chevron-down" />
        </div>
        <div className="flex items-center border-b py-4">
          <span className="flex-1">How can I request a new browser?</span>
          <i className="text-bookmark-purple fas fa-chevron-down" />
        </div>
        <div className="flex items-center border-b py-4">
          <span className="flex-1">Is there a mobile app?</span>
          <i className="text-bookmark-purple fas fa-chevron-down" />
        </div>
        <div className="flex items-center border-b py-4">
          <span className="flex-1">What about other Chromium browsers?</span>
          <i className="text-bookmark-purple fas fa-chevron-down" />
        </div>
        <button type="button" className="mt-12 flex self-center btn text-white bg-blue-500 hover:bg-bookmark-white hover:text-black shadow-md py-3 px-6 rounded-md transition duration-300">
          More Info
        </button>
      </div>
    </div>
  </section>
  {/* Contact Us */}
  <section className="bg-blue-500 text-white py-20">
    <div className="container">
      <div className="sm:w-3/4 lg:w-2/4 mx-auto">
        <p className="font-light uppercase text-center mb-8">35,000+ ALREADY JOINED</p>
        <h1 className="text-3xl text-center">Stay up-to-date with what we’re doing</h1>
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <input type="text" placeholder="Enter your email address" className="focus:outline-none flex-1 px-2 py-3 rounded-md text-black" />
          <button type="button" className="btn bg-red-600 hover:bg-bookmark-white hover:text-black shadow-md py-3 px-6 rounded-md transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="bg-blue-900 py-8">
    <div className="container flex flex-col ml-12 md:flex-row items-center">
      <div className="flex flex-1  flex-wrap items-center justify-center md:justify-start gap-12">
        <img src={whito} alt="white" />
        <ul className="flex text-white uppercase gap-12 text-xs">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className="flex gap-10 mt-12 md:mt-0">
        <li><i className="text-white text-2xl fab fa-twitter" /></li>
        <li><i className="text-white text-2xl fab fa-facebook-square" /></li>
      </div>
    </div>
  </footer>
</div>

    )
}

export default Land
