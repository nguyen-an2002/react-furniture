import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const registerUser = async (
    name: string,
    username: string,
    password: string
) => {
    const userRef = doc(db, "users", username);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
        throw new Error("Username đã tồn tại");
    }

    await setDoc(userRef, {
        name,
        username,
        password,
        createdAt: new Date(),
    });
};
export const loginUser = async (
    username: string,
    password: string
) => {
    const userRef = doc(db, "users", username);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
        throw new Error("Username không tồn tại");
    }

    const userData = userSnap.data();

    if (userData.password !== password) {
        throw new Error("Sai mật khẩu");
    }

    return userData;
};
