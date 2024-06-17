import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import NewOrganizationPanel from "./components/NewOrganizationPanel.tsx";
import NewUserPanel from "./components/DontDelet.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<NewUserPanel />
		<NewOrganizationPanel />
	</React.StrictMode>
);
