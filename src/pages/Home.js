import { Link } from "react-router-dom";

const Home = () => {
     return (
         <div className="text-textcolor dark:text-textcolor">
             <div className="pb-15">
                 <div className="flex justify-center items-center content-center">
                     <span>
                         <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className="h-[350px]"/>
                     </span>
                     <span className="text-5xl">
                         owlMQ
                     </span>
                 </div>
                 <div className="flex justify-center items-center content-center">
                     <p className="text-4xl">
                         Distributed message queuing service
                     </p>
                 </div>
                 <div className="flex justify-center items-center content-center p-10">
                     <button class="text-textcolor dark:text-textcolor py-2 px-4 border border-textcolor dark:border-textcolor rounded hover:bg-neutral-300 hover:dark:bg-neutral-800">
                         <Link to="/docs#getting_started">Getting started</Link>
                     </button>
                 </div>

             </div>
             <p>
                 WORK IN PROGRESS
                 <br />
                 <br />
             </p>
         </div>
  );
};

export default Home;

