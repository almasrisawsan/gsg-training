import { useEffect, useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("Mary");
  const [lastName, setLastName] = useState("Poppins");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <label>
        First name:
        <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        <b>
          Good morning, {firstName} {lastName}.
        </b>
      </p>
    </>
  );
}



import { useFormInput } from './useFormInput.js';

export default function Form() {
  const firstNameProps = useFormInput('Mary');
  const lastNameProps = useFormInput('Poppins');

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
    </>
  );
}

//useInputField
import { useState } from 'react';

export function useFormInput(initialValue) {
  // any logic
  return initialValue;
}


