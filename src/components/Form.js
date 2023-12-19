import { useState } from 'react';

export default function Form() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your email is: ${email}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <input className='btn btn-outline-secondary mx-2 my-2' type="submit" />
    </form>
  )
}
