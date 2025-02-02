import logo from '../logo.png';

const Home = () => {
     return (
         <div className="text-textcolor dark:text-textcolor">
             <p>
                 WORK IN PROGRESS
                 <br />
                 <br />
                 <div
                     style={{
                         width: '300px',
                         height: '200px',
                         margin: '0 auto',
                         textAlign: 'center',
                         paddingTop: '90px'
                     }}
                 >
                     <img src={logo} alt="Logo" />
                 </div>
             </p>
         </div>
  );
};

export default Home;

