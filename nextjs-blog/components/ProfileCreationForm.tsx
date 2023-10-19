// components/ProfileCreationForm.tsx
import React from "react";

const ProfileCreationForm = () => {
  return (
      <div className="form-container">
          <h2>Create Profile Feature</h2>
          
          <div className="section">
              <input type="radio" id="company" name="profileType" value="company" checked />
              <label htmlFor="company">Company</label>
              
              <input type="radio" id="individual" name="profileType" value="individual" />
              <label htmlFor="individual">Individual</label>
          </div>
          <div className="section">
    <label htmlFor="businessName">Business Name:</label>
    <input type="text" id="businessName" name="businessName" />
</div>

<div className="section">
    <label htmlFor="contactPerson">Contact Person Name:</label>
    <input type="text" id="contactPerson" name="contactPerson" />
</div>

      </div>
  );
};

export default ProfileCreationForm;
