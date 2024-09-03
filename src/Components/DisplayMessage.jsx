import { Calculations } from "./util";
import numberDB from "../db/numberDB.json";

const DisplayMessage = ({ n }) => {
  // if (!n) return;
  let num = Calculations(n);
  const info = numberDB[num];
  return (
    <div>
      <h1 className="text-custom-blue mt-10 lessthan464:text-[40px]">
        You Are Number
        <div className="w-[80px] h-[70px] m-auto mt-3 mb-3 rounded-lg shadow-xl border-[#A5DD9B] lessthan464:h-[63px]">
          {num}
        </div>
      </h1>
      <div className="flex items-baseline mt-20 moreSmaller:flex-col lessthan464:mt-16">
        <div className="w-[50%] border-2 moreSmaller:w-full moreSmaller:mb-3 mr-8 border-[#add8e6] rounded-tl-2xl rounded-br-2xl shadow-lg transition-transform duration-300 hover:scale-105">
          <h1 className="text-xl text-black border-b-2 border-[#add8e6] p-3">
            Your Qualities Are
          </h1>
          <p className="text-custom-blue w-full h-full inline-block mr-3 text-left text-xl p-3 smaller:text-lg moreSmaller:block">
            {info.description}
          </p>
        </div>
        <div className="w-[50%] border-2 moreSmaller:w-full border-[#add8e6] rounded-tl-2xl rounded-br-2xl shadow-lg transition-transform duration-300 hover:scale-105">
          <h1 className="text-xl text-black border-b-2 border-[#add8e6] p-3">
            Some famous personalities with this number
          </h1>
          <p className="text-custom-blue w-full h-full inline-block p-4">
            <ul className="flex flex-col space-y-6 text-left h-full">
              <li className="text-xl text-center">
                {info.famous_personalities[0]}
              </li>
              <li className="text-xl text-center">
                {info.famous_personalities[1]}
              </li>
              <li className="text-xl text-center">
                {info.famous_personalities[2]}
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
export default DisplayMessage;
