const SecText = ({ state }) => {
  const base = "مرحبا بك";
  const sec = "تسجيل الدخول";
  return (
    <h2 className="font-ar font-bold text-4xl text-gray-600 text-center my-1">
      {state === `base` ? base : sec}
    </h2>
  );
};

export default SecText;
