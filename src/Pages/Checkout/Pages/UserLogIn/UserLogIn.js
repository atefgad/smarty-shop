import React from "react";

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
