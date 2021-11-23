import { useState } from "react";
import FormSwitcher from "./formFragments/FormSwitcher";
import Logo from "./formFragments/logo";
import SecText from "./formFragments/SecText";

const MainForm = () => {
  const [state, setState] = useState("base");
  return (
    <>
      <main className="w-screen h-screen flex items-center justify-center border-4 rounded-md">
        <form className="border-2 rounded-md p-10 font-en">
          <header>
            <Logo />
            <SecText state={state} />
          </header>
          <fieldset>
            <FormSwitcher/>
            <hr />
            <label htmlFor="email"></label>
            <input
              type="email"
              className="w-full border px-3 py-2 rounded-md my-2 placeh"
              placeholder="البريد الالكتروني"
            />
            <input
              type="submit"
              value="استمرار"
              className="bg-blue-900 text-white font-ar w-full p-2 my-2"
            />
          </fieldset>
        </form>
      </main>
    </>
  );
};

export default MainForm;
