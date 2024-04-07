import React, { useState } from 'react';
import { Section, Div, Title } from './Home.style';
import Container from '../../components/Container';
export const Home = () => {
  const [officer_name, setOfficer] = useState('');
  const [amount, setAmount] = useState('');
  const [date_of_incident, setDate] = useState(new Date());

  const handleInputChange = (e) => {
    setOfficer(e.target.value);
  };

  const handleFigureChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { officer_name, amount, date_of_incident };
      const response = await fetch('http://localhost:3000/v1/report/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      // setAmount('');
      // setOfficer('');
      console.log(response);
      window.location = '/success';
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Section>
        <Container>
          <Div>
            <Title>police brutality report form</Title>
            <form onSubmit={onSubmitForm}>
              <label>What is the name of the officer in question?</label>
              <div>
                <input
                  onChange={handleInputChange}
                  value={officer_name}
                  type='text'
                />
              </div>
              <label>When was the date of the incident?</label>
              <div>
                <input
                  selected={date_of_incident}
                  type='date'
                  onChange={handleDateChange}
                />
              </div>
              <label>How much is the bribe that was paid? (optional)</label>
              <div>
                <input
                  value={amount}
                  type='number'
                  onChange={handleFigureChange}
                />
              </div>
              {/* <h2>Gender</h2> */}

              <button>Submit</button>
            </form>
          </Div>
        </Container>
      </Section>
    </>
  );
};
