import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalInfo from "./components/YourInfo";
import Sidebar from "./components/Sidebar";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import ThankYou from "./components/ThankYou";
import { PlansProvider } from "./context/PlansContext";
import { AddOnsProvider } from "./context/AddOnsContext";

const App = () => {
  return (
      <PlansProvider>
        <AddOnsProvider>
            <BrowserRouter>
              <div className="bg-white sm:w-[60rem] h-[35rem] mt-[100px] sm:mt-0 rounded-xl shadow-xl p-4 flex flex-col sm:flex sm:flex-row justify-between">
                <Sidebar />
                <Routes>
                  <Route path="/" element={<PersonalInfo />} />
                  <Route path="/selectplan" element={<SelectPlan />} />
                  <Route path="/addons" element={<AddOns />} />
                  <Route path="/summary" element={<Summary />} />
                  <Route path="/thankyou" element={<ThankYou />} />
                </Routes>
              </div>
            </BrowserRouter>
          </AddOnsProvider>
      </PlansProvider>
  );
};

export default App;