import logo from '../logo.png';

const Home = () => {
     return (
    <div
      style={{
        width: '300px',
        height: '200px',
        margin: '0 auto',
        textAlign: 'center',
        paddingTop: '90px'
      }}
    >
      <p>
          <img src={logo} alt="Logo" />
      </p>
    </div>
  );
};

export default Home;

