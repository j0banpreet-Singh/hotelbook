import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";
import "./index.css"

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <AuthContextProvider>
        <SearchContextProvider>
            <App />
        </SearchContextProvider>
    </AuthContextProvider>
)