import RudyCard from "components/Card";
import pyraLogo from "media/pyra-logo.png";
import rudyFace from "media/rudyFace.png";
import rudyFolioScreen from "media/rudyFolioScreen.png";

function Body() {
    return (
        <div className="App-body">
            <RudyCard
            cardTitle={"About me"}
            editDate={"october 2022"}
            cardImage={rudyFolioScreen}
            cardLink={"https://radishoux.github.io/folio"}
            cardDescription={"My resume website"}/>

            <RudyCard
            cardTitle={"Pyra"}
            editDate={"december 2022"}
            cardImage={pyraLogo}
            cardLink={""}
            cardDescription={"A study on the ponzi scheme and how would nowadays society use it"}/>
{/*
            <RudyCard
            cardTitle={"About me"}
            editDate={"november 2022"}
            cardImage={rudyFace}
            cardLink={"https://rudyquinternet.com/"}
            cardDescription={"My resume website"}/> */}
        </div>
    );
}

export default Body;