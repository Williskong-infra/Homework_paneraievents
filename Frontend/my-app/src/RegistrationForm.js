import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    title: 'Mr.',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    additionalGuest: false,
    knowsPanerai: '',
    ownsPanerai: '',
    ownsMechanicalWatch: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to a server
  };

  return (
    <div className="registration-form">
      <h2>Join us for a private masterclass with Panerai</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <select name="title" value={formData.title} onChange={handleChange}>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
          </select>
        </label>

        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>

        <label>
          Mobile:
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          <input type="checkbox" name="additionalGuest" checked={formData.additionalGuest} onChange={handleChange} />
          Additional Guest Details (Each participant can bring one guest only)
        </label>

        <h3>Survey Questions</h3>
        <label>
          Do you know PANERAI before?
          <input type="radio" name="knowsPanerai" value="YES" onChange={handleChange} /> YES
          <input type="radio" name="knowsPanerai" value="NO" onChange={handleChange} /> NO
        </label>

        <label>
          Do you own a PANERAI watch?
          <input type="radio" name="ownsPanerai" value="YES" onChange={handleChange} /> YES
          <input type="radio" name="ownsPanerai" value="NO" onChange={handleChange} /> NO
        </label>

        <label>
          Do you own a mechanical watch?
          <input type="radio" name="ownsMechanicalWatch" value="YES" onChange={handleChange} /> YES
          <input type="radio" name="ownsMechanicalWatch" value="NO" onChange={handleChange} /> NO
        </label>

        <button type="submit">SUBMIT</button>
      </form>

      <p>
        By clicking submit, you agree to receive marketing information about Panerai’s products or services. 
        We may send you this information using e-mail, text, telephone or post. We may also use your information 
        to deliver personalised messages or advertising on social media or other digital platforms. You can ask 
        us to stop marketing to you at any time. For further information about how we use your personal information, 
        please see our <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </div>
  );
};

export default RegistrationForm;