"use client"; // This tells Next.js that this component runs on the user’s browser, not the server

import { useState } from "react"; // useState allows us to store information in our page (like a notepad in memory)

export default function Home() {
  // State variables are like little boxes where we can store values that change over time
  const [characters, setCharacters] = useState("Alice,Bob"); // Default names of characters
  const [genre, setGenre] = useState("Physics"); // Default story type
  const [story, setStory] = useState(""); // This will hold the story the AI creates
  const [loading, setLoading] = useState(false); // Keeps track if the story is being generated
  const [error, setError] = useState(""); // Stores any problem messages

  // This function is called when we click the “Generate Story” button
  const handleGenerate = async () => {
    setLoading(true); // Show that we are working on generating the story
    setStory("");     // Clear any previous story
    setError("");     // Clear any previous error

    try {
      // We ask our backend (server) to generate the story
      // "/api/chat" is the path where our AI story generator lives
      const response = await fetch("/api/chat", {
        method: "POST", // We are sending information to the backend
        headers: { "Content-Type": "application/json" }, // Tell server we are sending text in JSON format
        body: JSON.stringify({
          // Convert our characters string into a nice array ["Alice","Bob","Charlie"]
          characters: characters.split(",").map((s) => s.trim()),
          genre: genre.trim(), // Remove extra spaces from genre
        }),
      });

      // Try to read the response from the server as JSON
      const data = await response.json().catch(() => {
        throw new Error("API did not return JSON. Check your API route/key."); // Friendly message if something goes wrong
      });

      if (data.story) {
        setStory(data.story); // If the server gave us a story, show it
      } else {
        setError(data.error || "Unknown error from API"); // If not, show error
      }
    } catch (err) {
      setError(err.message); // Show any other errors that happened
    } finally {
      setLoading(false); // Done working, hide the “loading” message
    }
  };

  // This part is the visible page that the user sees
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>AI Assignment Generator</h1> {/* Page title */}

      {/* Input for character names */}
      <label>Characters (comma separated):</label>
      <input
        type="text"
        value={characters} // Shows the current character names
        onChange={(e) => setCharacters(e.target.value)} // Updates our box when the user types
        style={{ width: "100%", marginBottom: "10px" }} // Makes it look nice
      />

      {/* Input for story genre */}
      <label>Subject:</label>
      <input
        type="text"
        value={genre} // Shows the current genre
        onChange={(e) => setGenre(e.target.value)} // Updates our box when the user types
        style={{ width: "100%", marginBottom: "10px" }}
      />

      {/* Button to generate the story */}
      <button
        onClick={handleGenerate} // Runs our story-making function
        disabled={loading} // Can't click while story is being generated
        style={{ marginBottom: "20px" }}
      >
        {loading ? "Generating..." : "Generate Assignment"} {/* Show loading text or button text */}
      </button>

      {/* Show error if something went wrong */}
      {error && <div style={{ color: "red", marginBottom: "20px" }}>{error}</div>}

      {/* Show the story if it was created */}
      {story && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ccc",
            whiteSpace: "pre-wrap", // Keeps line breaks
          }}
        >
          {story}
        </div>
      )}
    </div>
  );
}
