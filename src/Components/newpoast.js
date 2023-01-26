import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPoast = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [topic, setTopic] = useState("Bitcoin");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, topic };

    setIsPending(true);

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="newpoast">
      <h2>Add a new bleezy</h2>
      <form onSubmit={handleSubmit}>
        <label>poast title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>content:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>poast topic:</label>
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="Bitcoin">Bitcoin</option>
          <option value="Beef Initiative">Beef Initiative</option>
        </select>
        {!isPending && <button>send poast</button>}
        {isPending && <button disabled>adding poasttttttt</button>}
      </form>
    </div>
  );
};

export default NewPoast;
