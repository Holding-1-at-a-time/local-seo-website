import React from "react";

export function EstimateForm() {
  return (
    <form className="estimate-form">
      <h2>Request an Estimate</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="service">Service:</label>
        <select id="service" name="service" required>
          <option value="ceramic-coating">Ceramic Coating</option>
          <option value="interior-detailing">Interior Detailing</option>
          <option value="paint-correction">Paint Correction</option>
        </select>
      </div>
      <div>
        <label htmlFor="details">Details:</label>
        <textarea id="details" name="details" rows={4} />
      </div>
      <button type="submit">Get Estimate</button>
    </form>
  );
}
