import { useState } from "react";
import DisplayMessage from "./DisplayMessage";
const InputForm = () => {
  const [date, setDate] = useState();
  const [num, setNum] = useState();
  const handle_submit = (evt) => {
    evt.preventDefault();
    const [year, month, day] = date.split("-");
    const validDate = year + month + day;
    setNum(validDate);
  };
  return (
    <div>
      <h1 className="text-custom-blue">Numbers Do Speak!</h1>
      <form
        onSubmit={handle_submit}
        className="border rounded-formRadius p-10 px-20 mt-20 bg-white"
      >
        <label
          htmlFor="dob"
          className="block mr-15 text-for-label font-bold text-textLabel mb-2"
        >
          Enter date of birth:
        </label>
        <input
          type="date"
          placeholder="D.O.B"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          id="dob"
          className="border rounded-customRadius bg-[#aaa] text-custom text-white w-full px-5 py-1 text-center"
        />
        <button type="submit" className="bg-custom-blue hover:bg-hoverColor">
          Send It!
        </button>
      </form>
      {num && <DisplayMessage n={num} />}
    </div>
  );
};
export default InputForm;
