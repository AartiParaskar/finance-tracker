import { useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase";

export default function Auth() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  // SIGNUP
  const signup = async () => {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Signup Successful");

    } catch (error) {

      alert(error.message);
    }
  };

  // LOGIN
  const login = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful");

    } catch (error) {

      alert(error.message);
    }
  };

  // LOGOUT
  const logout = async () => {

    await signOut(auth);

    alert("Logout Successful");
  };

  return (

    <div className="bg-white/10 p-6 rounded-3xl mb-10">

      <h2 className="text-2xl font-semibold mb-5">
        Authentication
      </h2>

      <div className="grid md:grid-cols-4 gap-4">

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-xl bg-black/30 border border-zinc-700 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 rounded-xl bg-black/30 border border-zinc-700 outline-none"
        />

        <button
          onClick={signup}
          className="bg-green-500 rounded-xl"
        >
          Signup
        </button>

        <button
          onClick={login}
          className="bg-blue-500 rounded-xl"
        >
          Login
        </button>

      </div>

      <button
        onClick={logout}
        className="bg-red-500 px-5 py-3 rounded-xl mt-5"
      >
        Logout
      </button>

    </div>
  );
}