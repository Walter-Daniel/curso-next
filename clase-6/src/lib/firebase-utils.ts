import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type AuthProps = {
    email: string;
    password: string;
    router: AppRouterInstance;
    isSignUp: boolean
}

const getAuth = async ({email, password, router, isSignUp}:AuthProps) => {
  if(isSignUp) {
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCred) => {
    fetch("/api/auth", {
        method: "POST",
        headers: {
        Authorization: `Bearer ${await userCred.user.getIdToken()}`,
        },
    }).then((response) => {
        if (response.status === 200) {
          router.push("/");
        }
    })
    })
    .catch(error => {
      alert(`Sign up failed: ${error.message} - ${error.code}`)
    })
  } else {
    signInWithEmailAndPassword(auth, email.trim(), password)
    .then(async (userCred) => {
    fetch("/api/auth", {
        method: "POST",
        headers: {
        Authorization: `Bearer ${await userCred.user.getIdToken()}`,
        },
    }).then((response) => {
        if (response.status === 200) {
          router.push("/");
        }
    })
    })
    .catch(error => {
      alert(`Login failed: ${error.message} - ${error.code}`)
    })
  }
}


export { getAuth }