import { useState } from 'react';
import axios from 'axios';

import { Button, Table, Textarea } from '.';

const Chat = () => {

  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/chat`, { message });
      setResponse(res.data);
      console.log("res data", res.data)

    } catch (err) {
      console.error(err);
      setResponse("Server error: " + err.message);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto my-10">
      <form onSubmit={handleSubmit} className="mb-4">
        <Textarea
          value={message}
          rows={8}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask something about your database..."
        />
        <div className="flex justify-end m-0">
          <Button type="submit" text="submit" />
        </div>
      </form>
      {Array.isArray(response?.data) && response.data.length > 0 && typeof response.data[0] === "object" && (
        <>
          <Table response={response.data} />
          <p className='mt-4 px-2'>{response.explanation}</p>
        </>
      )}
      <p className='px-2'>{response?.type === 'text' && response.response}</p>
    </div>
  );
}

export default Chat;
