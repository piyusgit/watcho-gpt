import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleSearch } from "../utils/gptSlice";
import { setLang } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.showSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            // photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe from auth state changes when component unmounts

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSearch = () => {
    // Toggle GPT Search button
    dispatch(toggleSearch());
  };

  const handleLang = (event) => {
    // console.log(event.target.value);
    dispatch(setLang(event.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black  z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {gptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              name=""
              id=""
              onChange={handleLang}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleSearch}
            className="py-2 px-4 mx-4 my-2 bg-purple-600 text-white rounded-md"
          >
            {gptSearch ? "SearchPage" : "GPT Search"}
          </button>
          <img className="w-12 h-12 " src={user?.photoURL} alt="userIcon" />
          <span className="text-white ">{user?.displayName}</span>
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white p-2 mx-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
