import React, { useState } from 'react';

const AddPersonForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  return (
    <form
      className="person-data"
      onSubmit={event => {
        event.preventDefault();

        console.log('name', name);
        console.log('surname', surname);
        console.log('email', email);
        console.log('gender', gender);
      }}
    >
      <label>
        Imię:
        <input
          name="name"
          onChange={event => setName(event.target.value)}
          value={name}
        />
      </label>

      <br />

      <label>
        Nazwisko:
        <input
          name="surname"
          onChange={event => setSurname(event.target.value)}
          value={surname}
        />
      </label>

      <br />

      <label>
        E-mail:
        <input
          name="email"
          type="email"
          onChange={event => setEmail(event.target.value)}
          value={email}
        />
      </label>

      <br />

      <label>
        Płeć:
        <select
          name="gender"
          onChange={event => setGender(event.target.value)}
          value={gender}
        >
          <option>----------</option>
          <option value="male">Męzczyzna</option>
          <option value="female">Kobieta</option>
        </select>
      </label>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPersonForm;
