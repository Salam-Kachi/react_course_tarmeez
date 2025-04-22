import "./App.css";
import MyFormInput from "./components/MyFormInput";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "50px",
      }}
    >
      <h1>My First React App</h1>
      <MyFormInput />
    </div>
  );
}
