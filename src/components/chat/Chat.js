import React from "react";
import ChatNav from "./ChatNav";
import MessageBoard from "./MessageBoard";
import NewMessage from "./NewMessage";

export default function Chat() {
  const messages = [
    { name: "Lisa Søndergaard", message: "Hej med jer!", time: "20-11-2020", img: "image", id: "1" },
    { name: "Anja Andersen", message: "Hvem er på arbejde i dag?", time: "20-11-2020", img: "image", id: "2" },
    { name: "Lisa Søndergaard", message: "Jeg tror alle undtagen Bob.", time: "20-11-2020", img: "image", id: "3" },
    { name: "Bob hund", message: "Nej jeg er her også...", time: "20-11-2020", img: "image", id: "4" },
    { name: "Anja Andersen", message: "Godt Bob.", time: "20-11-2020", img: "image", id: "5" },
    { name: "Bob Hund", message: "Ja man har sgu da aldrig fri.", time: "20-11-2020", img: "image", id: "6" },
    {
      name: "Rune Jensen",
      message: "Så er det godt du elsker dit arbejde :)",
      time: "20-11-2020",
      img: "image",
      id: "7",
    },
    {
      name: "Lisa Søndergaard",
      message: "Jeg tror alle er her i dag, når Bob er her.",
      time: "20-11-2020",
      img: "image",
      id: "8",
    },
    { name: "Mikkel Hansen", message: "Jeg er her også!", time: "20-11-2020", img: "image", id: "9" },
    { name: "Rune Jensen", message: "Super!", time: "20-11-2020", img: "image", id: "10" },
  ];

  return (
    <main className="Chat hide">
      <div className="chat-wrapper">
        <ChatNav />
        <MessageBoard messages={messages} />
        <NewMessage />
      </div>
    </main>
  );
}
/* myMessages={messages.filter((me) => me.name === "Lisa Søndergaard")}
          yourMessages={messages.filter((you) => you.name !== "Lisa Søndergaard")} */
