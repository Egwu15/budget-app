import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  UserCredential,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export async function userNameAndPasswordSignIn(
  userName: string,
  password: string
): Promise<UserCredential | String> {
  const auth = getAuth();
  await setPersistence(auth, browserSessionPersistence);
  try {
    return await signInWithEmailAndPassword(auth, userName, password);
  } catch (error) {
    return "Username or password is incorrect";
  }
}

export async function userNameAndPasswordSignUP(
  userName: string,
  password: string
): Promise<UserCredential | any> {
  const auth = getAuth();
  await setPersistence(auth, browserSessionPersistence);
  try {
    const res = await createUserWithEmailAndPassword(auth, userName, password);
    return res;
  } catch (error: any) {
    return error;
  }
}
