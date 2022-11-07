import RudyCard from "components/Card";
import rudyFace from "media/rudyFace.png";
import rudyFolioScreen from "media/rudyFolioScreen.png";

function Body() {
    return (
        <div className="App-body">
            <RudyCard
            cardTitle={"About me"}
            editDate={"november 2022"}
            cardImage={rudyFolioScreen}
            cardLink={"https://radishoux.github.io/folio"}
            cardDescription={"My resume website"}/>

            <RudyCard
            cardTitle={"About me"}
            editDate={"november 2022"}
            cardImage={rudyFace}
            cardLink={"https://rudyquinternet.com/"}
            cardDescription={"My resume website"}/>

            <RudyCard
            cardTitle={"About me"}
            editDate={"november 2022"}
            cardImage={rudyFace}
            cardLink={"https://rudyquinternet.com/"}
            cardDescription={"My resume website"}/>
        </div>
    );
}

export default Body;