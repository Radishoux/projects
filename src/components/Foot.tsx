import logo from 'media/logo-react.png';

function Foot() {
    return (
        <div className="App-footer">
            <img src={logo} className="App-logo" alt="logo" />
        <p style={{margin: "25px"}}>
          made via <span style={{color: "#61dbfb"}}>React</span>  with 💜
        </p>
        </div>
    );
}

export default Foot;