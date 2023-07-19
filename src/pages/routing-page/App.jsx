import { Link } from 'react-router-dom';


function RouteApp() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:"90vh",flexDirection:'column',gap:'3rem'}}>
        <h1>The Routing Page</h1>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'3rem'}}>
       <Link to={`homepage`}>
        <h2>HomePage</h2></Link>
       <Link to={`about`}><h2>About</h2></Link>
       <Link to={`contact`}><h2>Contact</h2></Link>
    </div>
    </div>
  );
}

export default RouteApp;
