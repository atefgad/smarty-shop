import React from "react";
import { useNavigate } from "react-router-dom";

// import Components
import { SignIn, SignUp } from "../../../../Components";

function UserLogIn({ signToggle, setSignToggle }) {
  return (
    <div>
      {signToggle ? (
        <SignIn showSign={signToggle} signToggle={setSignToggle} />
      ) : (
        <SignUp showSign={signToggle} signToggle={setSignToggle} />
      )}
    </div>
  );
}

export default UserLogIn;
