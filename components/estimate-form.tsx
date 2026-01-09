
import React, { useRef } from "react";

type EstimateFormProps = {
  defaultService?: string;
  onSubmit?: (data: { name: string; email: string; service: string; details: string }) => void;
};

export function EstimateForm({ defaultService, onSubmit }: EstimateFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string,
      details: formData.get("details") as string,
    };
    if (onSubmit) {
      onSubmit(data);
    } else {
      // fallback: log to console
      console.log("Estimate submitted:", data);
    }
  };

  return (
    <form className="estimate-form" ref={formRef} onSubmit={handleSubmit}>
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
        <select id="service" name="service" required defaultValue={defaultService}>
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