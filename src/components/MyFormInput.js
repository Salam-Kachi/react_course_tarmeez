import { useState } from "react";
export default function MyFormInput() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    db: new Date().toISOString().split("T")[0],
    generalInfo: "",
    isStudent: false,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formInputs);
      }}
      style={{ margin: "20px" }}
    >
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="nameInput">Name:</label>
        <input
          type="text"
          placeholder="Enter name here"
          id="nameInput"
          name="nameInput"
          value={formInputs.name}
          onChange={(e) =>
            setFormInputs({ ...formInputs, name: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Enter email here"
          id="emailInput"
          name="emailInput"
          value={formInputs.email}
          onChange={(e) =>
            setFormInputs({ ...formInputs, email: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="dbInput">Birth Date:</label>
        <input
          type="date"
          placeholder="Enter Birth Date here"
          id="dbInput"
          name="dbInput"
          value={formInputs.db}
          onChange={(e) => setFormInputs({ ...formInputs, db: e.target.value })}
        />
      </div>
      <hr></hr>
      <div>
        <label htmlFor="studentInput">Are you Student?</label>
        <input
          type="checkbox"
          id="studentInput"
          name="studentInput"
          checked={formInputs.isStudent}
          onChange={(e) =>
            setFormInputs({ ...formInputs, isStudent: e.target.checked })
          }
        />
      </div>
      <div>
        <label htmlFor="generalInfoInput">General Info:</label>
        <textarea
          width="300px"
          height="200px"
          rows="4"
          cols="50"
          style={{ resize: "none" }}
          value={formInputs.generalInfo}
          placeholder="Enter General Info here"
          onChange={(e) =>
            setFormInputs({ ...formInputs, generalInfo: e.target.value })
          }
          id="generalInfoInput"
          name="generalInfoInput"
        />
      </div>

      <div style={{ margin: "20px" }}>
        <button
          type="submit"
          style={{
            fontSize: "25px",
            outline: "none",
            cursor: "pointer",
            padding: "10px",
            border: "solid 5px red",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
