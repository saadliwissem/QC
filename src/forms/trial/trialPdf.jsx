import React from 'react';

const PdfDocument = ({ formData }) => {
  return (
    <div>
      <h1>Generated PDF</h1>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      {/* add more content based on your form fields */}
    </div>
  );
};

export default PdfDocument;
