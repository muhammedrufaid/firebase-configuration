import { useState } from "react";
import "./phone.css";
import { auth } from "../../config/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber ,signOut} from "firebase/auth";

const PhoneAuth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState(null)


  console.log(auth.currentUser);

  //first njmlk otp send cheyyenm  otp send cheyyunenda 1st step recaptcha verifier create cheyyuka
  const sendOtp = async () => {
    try {
      //putyoru recaptcha verifier aanu njmk ella thavaneyum create cheyyendath athukond new koduth
      let recaptchaVerifier = await new RecaptchaVerifier("recaptcha",{},auth);
      //eni ee recaptcha verifier appil display cheyyenm athinu vendi "recaptcha" - ee string aanu use cheyyunath ithinu enthum name u kodukkam njml recaptcha koduth .ee oru string ne id aaytanu use cheyyunath
      let confirmation = await signInWithPhoneNumber(auth,phone,recaptchaVerifier);
      console.log(confirmation);
      setUser(confirmation)
    } catch (err) {
      console.log(err);
    }
  };

  const verifyOtp = async() => {
    await user.confirm(otp)
  };

  const logOut = async() => {
    await signOut(auth)
  };

  return (
    <div className="phone-auth-login">
      <input
        type="num"
        placeholder='"Enter phone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={sendOtp}>Send Otp</button>
      <div id="recaptcha">

      </div>

      <input
        type="text"
        placeholder='"Enter otp'
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button onClick={verifyOtp}>Confirm Otp</button>
      <button onClick={logOut}>LogOut</button>
    </div>
  );
};

export default PhoneAuth;
