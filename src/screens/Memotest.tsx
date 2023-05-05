import { useEffect, useState } from "react";
const IMAGES = [
    "https://icongr.am/devicon/csharp-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/react-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/postgresql-original-wordmark.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/wordpress-plain.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/github-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/slack-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/photoshop-plain.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/express-original-wordmark.svg?size=128&color=currentColor",
    "https://icongr.am/entypo/brush.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/apple-original.svg?size=128&color=currentColor",
   

].flatMap((image) => [`a|${image}`, `b|${image}`])
.sort(() => Math.random() - 0.5);

export default function Memotest() {
    const [guessed, setGuessed] = useState<string[]>([]);
    const [selected, setSelected] = useState<string[]>([]);
    

    useEffect(() => {
      if (selected.length == 2) {
        if (selected[0].split("|")[1] == selected[1].split("|")[1]){
          setGuessed((guessed) => guessed.concat(selected));
        }
        setTimeout(() => setSelected([]),1000);
      }
    }, [selected])

    useEffect(() => {
      if (guessed.length == IMAGES.length){
        alert("You win!");
      }
    })

    return (
      <div>
        <h1>Memotest</h1>
        <div style={{marginTop: "2,5px"}}></div>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gridAutoRows: "90px",
            gap: 24
          }}
        >
          {IMAGES.map((image, index) => {
            const [, url] = image.split("|");
            const isSelected = selected.includes(image);
            const isGuessed = guessed.includes(image);
            const row = Math.floor(index / 6) + 1;
            const column = (index % 6) + 1;
            return (
              <li
                key={image}
                style={{
                  cursor: "pointer",
                  padding: 12,
                  border: "1px solid #2b003a",
                  borderRadius: 12,
                  display: "flex", // Mostrar el contenido como flexbox
                  justifyContent: "center", // Centrar horizontalmente
                  alignItems: "center", // Centrar verticalmente
                  gridRow: `${row} / span 1`,
                  gridColumn: `${column} / span 1`
                }}
                onClick={() =>
                  selected.length < 2 &&
                  setSelected((selected) => selected.concat(image))
                }
              >
                {isSelected || isGuessed ? (
                  <img alt="icon" src={url} style={{ width: "100%", height: "100%" }} />
                ) : (
                  <img
                    alt="icon"
                    src="https://icongr.am/clarity/plugin.svg?size=128&color=f9f5f5"
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
        }       
  