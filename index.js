// pages/index.js
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("type markdown here");

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <textarea
        style={{ width: '50%', height: '200px', marginBottom: '20px' }}
        value={markdown}
        onChange={handleChange}
      />
      <div style={{ width: '50%', border: '1px solid #ddd', padding: '20px' }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;

function reverseSentence(sentence) {
  // Split the sentence into words, reverse the array, and join it back into a sentence
  let reversedSentence = sentence.split(' ').reverse().join(' ');

  // Capitalize the first letter of the reversed sentence
  reversedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

  return reversedSentence;
}

// Example usage:
const inputSentence = "hello world this is a test";
const result = reverseSentence(inputSentence);
console.log(result); // Output: "Test a is this world hello"