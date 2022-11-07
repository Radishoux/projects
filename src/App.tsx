import 'App.scss';
import Head from 'components/Head';
import Body from 'components/Body';
import Foot from 'components/Foot';

function App() {
const documentWidth = document.documentElement.clientWidth;
const windowWidth = window.innerWidth;
const scrollBarWidth = windowWidth - documentWidth;

document.body.style.paddingRight = scrollBarWidth + "px";

  return (
    <div className="App">
        <Head />
        <Body />
        <Foot />
    </div>
  );
}

export default App;