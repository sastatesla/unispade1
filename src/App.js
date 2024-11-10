import "./App.css";
import ClientSay from "./ClientSay.js";
import CarrerResoure from "./component/CarrerResoure.js";
import FindMentor from "./component/FindMentor.js";
import LastSect from "./component/LastSect.js";
import Main from "./component/Main.js";
import Mentor from "./component/Mentor.js";
import Mentor2 from "./component/Mentor2.js";
import WorkFlow from "./component/WorkFlow.js";
import Faq from "./Faq.js";
import "./App.css";


function App() {


  return (
    <div className=" Main">
      <Main></Main>
      <FindMentor></FindMentor>
      <WorkFlow></WorkFlow>
      <Mentor></Mentor>
      <div className="break-line"></div>
      <Mentor2></Mentor2>
      <div className="break-line"></div>
      <ClientSay></ClientSay>
      <div className="break-line"></div>
      <CarrerResoure></CarrerResoure>
      <div className="break-line"></div>
      <Faq></Faq>
      <LastSect></LastSect>
      <div className="break-line"></div>

    </div>
  );
}

export default App;
