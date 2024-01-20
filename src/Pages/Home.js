import React, { useState } from "react";
import Form from "../forms/trial/trial";
import { usePDF } from "react-to-pdf";

export const Home = () => {
  const [formData, setFormData] = useState(null);
  const { toPDF, targetRef } = usePDF({ filename: 'generated-pdf.pdf' });

  const generatePdf = (data) => {
    setFormData(data);
    toPDF(targetRef.current);
  };

  const downloadPdf = () => {
    toPDF(targetRef.current);
  };

  return (
    <div>
      <Form generatePdf={generatePdf} />
      {formData && (
        <div>
          <div ref={targetRef}>
            <h1>Generated PDF</h1>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            {/* Add more content based on your form fields */}
          </div>
          <button onClick={downloadPdf}>Download PDF</button>
        </div>
      )}
    </div>)
};
