import { useState } from "react";

const FormSwitcher = () => {
  const mobile = "رقم الهاتف";
  const email = " البريد الالكترون";
  const [switcher, setSwitcher] = useState("mobile");
  const base = switcher === "mobile";
  console.log(switcher, base);
  return (
    <div className="flex items-center justify-around my-2 font-ar">
      <legend>
        <button
          onClick={() => setSwitcher("email")}
          className={!switcher ? "text-blue-900 font-bold" : "text-gray-600"}
        >
          {email}
        </button>
      </legend>

      <legend>
        <button
          onClick={() => setSwitcher("mobile")}
          className={base ? "text-gray-600" : "text-blue-900 font-bold"}
        >
          {mobile}
        </button>
      </legend>
    </div>
  );
};

export default FormSwitcher;
