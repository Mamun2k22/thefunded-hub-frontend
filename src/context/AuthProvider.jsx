// import React, { createContext, useEffect, useState } from 'react';
// // import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

// export const AuthContext = createContext();
// const auth = getAuth(app);


// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true)



//     const updateUser = (userInfo) => {
//         return updateProfile(auth.currentUser, userInfo);
//     }
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             console.log(currentUser);
//             setUser(currentUser);
//             setLoading(false);

//         });
//         return () => {
//             unsubscribe();
//         }


//     }, [])

//     const authInfo = {
//         loading,
//         user,

//     }

//     return (
//         <div>
//             <AuthContext.Provider value={authInfo}>
//                 {children}
//             </AuthContext.Provider>


//         </div>
//     );
// };

// export default AuthProvider;