import { useState , useEffect } from "react";
export default function Contact() {
  const [content, setContent] = useState(() => {
      const savedcontent = localStorage.getItem("content");
      if (savedcontent) {
        try {
          return JSON.parse(savedcontent);
        } catch (e) {
          return [];
        }
      }
      return [];
    });
    useEffect(() => {
      localStorage.setItem("content", JSON.stringify(content));
    }, [content]);
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  function handleAddName() {
    const newContact = {
      id: Date.now(),
      name: name,
      phone: phone,
    };
    setContent([...content, newContact]);
    setName("");
    setPhone("");
  }
  function handleDelete(id) {
    const updatedContent = content.filter((item) => item.id !== id);
    setContent(updatedContent);
  }
  return (
    <div className="center">
      <h1 style={{ textAlign: "center" }}>Contact List : </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {/* information  */}
        {content.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#bebecd",
              padding: "5px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <p
              style={{
                backgroundColor: "teal",
                padding: "2px",
                borderRadius: "5px",
                color: "white",
              }}
            >
              {" "}
              Id: # {item.id}.
            </p>
            <p
              style={{
                backgroundColor: "yellow",
                padding: "2px",
                borderRadius: "5px",
              }}
            >
              {" "}
              Name: {item.name}.
            </p>
            <p
              style={{
                backgroundColor: "pink",
                padding: "2px",
                borderRadius: "5px",
              }}
            >
              {" "}
              Phone: {item.phone}.
            </p>
            <button
              style={{
                border: "none",
                padding: "5px",
                borderRadius: "5px",
                backgroundColor: "#ed2828",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <div style={{display:"flex" , flexDirection:"column" , gap:"10px" , width:"80%"}} >
          <input
            type="text"
            placeholder="Name"
            style={{ border: "none", padding: "5px", borderRadius: "5px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            style={{ border: "none", padding: "5px", borderRadius: "5px" }}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button
          style={{
            border: "none",
            padding: "5px",
            borderRadius: "5px",
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
            width:"20%"
          }}
          onClick={handleAddName}
        >
          Add
        </button>
      </div>
    </div>
  );
}
