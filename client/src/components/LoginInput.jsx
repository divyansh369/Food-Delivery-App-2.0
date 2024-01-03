import React from "react";
import { useState } from "react";
import {motion} from 'framer-motion'
import { fadeInOut } from "../animation";

const LoginInput = ({
  placeHolder,
  icon,
  inputState,
  inputStateFunc,
  type,
  isSignUp,
}) => {
  const [IsFocus, setIsFocus] = useState(false);

  return (
    <motion.div {...fadeInOut}
      className={`flex items-center justify-center gap-4 bg-cardOverlay backdrop-blur-md rounded-md w-full px-4 py-2 ${
        IsFocus ? "shadow-md shadow-white-100" : "shadow-none"
      }`}
    >
      {icon}
      <input
        type={type}
        placeholder={placeHolder}
        className="w-full h-full bg-transparent text-pColor text-lg border-none outline-none placeholder-pColor" //placeholder-white -> placeholder-pcolor
        value={inputState}
        onChange={(e) => inputStateFunc(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </motion.div>
  );
};

export default LoginInput;
