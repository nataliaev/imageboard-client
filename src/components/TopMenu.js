import React from "react";
import { Link } from "react-router-dom";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";
import SignUpFormContainer from "./SignUpFormContainer";

import Button from "./styles/Button";
import MenuBar from "./styles/MenuBar";

function LogInButton({ showLogInForm, showSignUpForm }) {
  return (
    <MenuBar>
      <Button onClick={showLogInForm}>Log in</Button>
      <Button onClick={showSignUpForm}>Sign Up</Button>
    </MenuBar>
  );
}

function MyFavoritesButton() {
  return (
    <Link to="/favorites">
      <Button>My favorite cities</Button>
    </Link>
  );
}

function MyTravelPlanner() {
  return (
    <Link to="/travel-planner">
      <Button>My travel planner</Button>
    </Link>
  );
}

function AddImageButton({ showImageForm }) {
  return <Button onClick={showImageForm}>Add Photo</Button>;
}

export default function TopMenu({
  user,
  addingImage,
  loggingIn,
  signingUp,
  showLogInForm,
  showImageForm,
  showSignUpForm
}) {
  if (!user) {
    if (loggingIn === true) {
      return (
        <div>
          <LogInButton
            showLogInForm={showLogInForm}
            showSignUpForm={showSignUpForm}
          />
          <LoginFormContainer />
        </div>
      );
    } else if (signingUp === true) {
      return (
        <div>
          <LogInButton
            showLogInForm={showLogInForm}
            showSignUpForm={showSignUpForm}
          />
          <SignUpFormContainer />
        </div>
      );
    } else {
      return (
        <LogInButton
          showLogInForm={showLogInForm}
          showSignUpForm={showSignUpForm}
        />
      );
    }
  } else {
    if (addingImage === true) {
      return (
        <div>
          <MenuBar>
            <MyFavoritesButton />
            <MyTravelPlanner />
            <AddImageButton showImageForm={showImageForm} />
          </MenuBar>
          <CreateFormContainer />
        </div>
      );
    } else {
      return (
        <MenuBar>
          <MyFavoritesButton />
          <MyTravelPlanner />
          <AddImageButton showImageForm={showImageForm} />
        </MenuBar>
      );
    }
  }
}
