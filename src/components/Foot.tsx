import logo from 'media/logo.svg';

function Foot() {
    return (
        <div className="App-footer">
            <img src={logo} className="App-logo" alt="logo" />
        <p>
          made via <span style={{color: "#61dbfb"}}>React</span>  with 💜 by <span style={{color: "magenta"}}>Magenta</span>
        </p>
        </div>
    );
}

export default Foot;