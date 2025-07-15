// import { Navigate } from "react-router-dom";

// interface ProtectedRouteProps {
//     children: JSX.Element;
// }



// const isAuthenticated = () => {
//     // Replace with your real auth logic
//     return !!localStorage.getItem("authToken");
// };

// export default function ProtectedRoute({ children }: ProtectedRouteProps) {
//     if (!isAuthenticated()) {
//         return <Navigate to="/" replace />;
//     }
//     return children;
// }