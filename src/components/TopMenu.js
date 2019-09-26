import React from "react";
import { Link } from "react-router-dom";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";

function LogInButton({ showLogInForm }) {
  return (
    <button className="input-button" onClick={showLogInForm}>
      Log in
    </button>
  );
}

function MyFavoritesButton() {
  return (
    <Link to="/favorites">
      <button className="input-button">My favorite cities</button>
    </Link>
  );
}

function AddImageButton({ showImageForm }) {
  return (
    <button className="input-button" onClick={showImageForm}>
      Add Photo
    </button>
  );
}

export default function TopMenu({
  user,
  addingImage,
  loggingIn,
  signingUp,
  showLogInForm,
  showImageForm
}) {
  if (!user) {
    if (loggingIn === true) {
      return (
        <div>
          <LogInButton showLogInForm={showLogInForm} />
          <LoginFormContainer />
        </div>
      );
    } else {
      return <LogInButton showLogInForm={showLogInForm} />;
    }
  } else {
    if (addingImage === true) {
      return (
        <div>
          <MyFavoritesButton />
          <AddImageButton showImageForm={showImageForm} />
          <CreateFormContainer />
        </div>
      );
    } else {
      return (
        <div>
          <MyFavoritesButton />
          <AddImageButton showImageForm={showImageForm} />
        </div>
      );
    }
  }
}
