import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import NewOrganizationPanel from "./components/NewOrganizationPanel.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<NewOrganizationPanel />
	</React.StrictMode>
);
