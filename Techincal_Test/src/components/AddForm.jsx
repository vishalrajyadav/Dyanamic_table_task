import React, { useState } from "react";

function AddForm({ addData }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    city: ""
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.city) {
      alert("Please fill all fields");
      return;
    }

    addData({
      id: Date.now(),
      name: form.name,
      age: parseInt(form.age, 10),
      city: form.city
    });

    setForm({ name: "", age: "", city: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />

       <input name="age" type="number" value={form.age} onChange={handleChange} placeholder="Age" />
      <input name="city" value={form.city} onChange={handleChange} placeholder="City" />

      <button
      style={{borderRadius:"5px",boxShadow:"2px 3px 4px black"}}
       type="submit">Add</button>
    </form>
  );
}

export default AddForm;