import { useEffect, useState } from "react";
import wpmBackground from "../assets/wpm.jpg";

const WORDS = [
"codigo",
"framework",
"bug",
"hosting",
"devops",
"scrum",
"tester",
"sysadmine",
"javascript",
"python",
"android",
"interface",
"bootstrap",
"cookies",
"commit",
"bitbucket",
"api",
"servidor",
"contenedores",
];
export default function WordsPerMinute(){
    const [word, setWord] = useState(()=> WORDS[Math.random() * WORDS.length | 0]);
    const [characterCount,setCharacterCount] = useState(0);
    const [buffer, setBuffer] = useState("");
    const [time,setTime] = useState(0);
    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
    
if (buffer == word) {
    setWord(WORDS[(Math.random() * WORDS.length)| 0]);
    setCharacterCount(characterCount+word.length);
}
    setBuffer("");
} 
    useEffect(() => {
       if (time != 0){
        const timeout = setTimeout(() => setTime(time - 1), 1000);
        return () => clearTimeout(timeout);
       }
    },[time]);

    return (
     <div
    style={{
      backgroundImage: `url(${wpmBackground})`,
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        textAlign: 'center'
      }}
    >
      <h1 style={{ fontSize: 48 }}>{word}</h1>
      <h2>Characters typed: {characterCount}</h2>
      <h3>Remaining time: {time}</h3>
      {time ? (
        <form onSubmit={handleSubmit}>
          <input autoFocus type="text" value={buffer} onChange={(e) => setBuffer(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <button onClick={() => setTime(60)}>Play</button>
      )}
    </div>
  </div>
);
      }