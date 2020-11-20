import React from "react";
import ChatNav from "./ChatNav";
import MessageBoard from "./MessageBoard";
import NewMessage from "./NewMessage";

export default function Chat() {
  const messages = [
    { name: "Lisa Søndergaard", message: "Hej med jer!", date: "20-11-2020", img: "image", id: "1", time: "11.56 AM" },
    {
      name: "Anja Andersen",
      message: "Hvem er på arbejde i dag?",
      date: "20-11-2020",
      img: "image",
      id: "2",
      time: "08.46 AM",
    },
    {
      name: "Lisa Søndergaard",
      message: "Jeg tror alle undtagen Bob.",
      date: "20-11-2020",
      img: "image",
      id: "3",
      time: "08.50 AM",
    },
    {
      name: "Bob hund",
      message: "Nej jeg er her også...",
      date: "20-11-2020",
      img: "image",
      id: "4",
      time: "08.51 AM",
    },
    {
      name: "Anja Andersen",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, som dates by accident, som dates on purpose (injected humour and the like).",
      date: "20-11-2020",
      img: "image",
      id: "5",
      time: "09.15 AM",
    },
    { name: "Bob Hund", message: "Ja man har sgu da aldrig fri.", date: "20-11-2020", img: "image", id: "6" },
    {
      name: "Rune Jensen",
      message: "Så er det godt du elsker dit arbejde :)",
      date: "20-11-2020",
      img: "image",
      id: "7",
      time: "09.30 AM",
    },
    {
      name: "Lisa Søndergaard",
      message: "Jeg tror alle er her i dag, når Bob er her.",
      date: "20-11-2020",
      img: "image",
      id: "8",
      time: "11.56 AM",
    },
    { name: "Mikkel Hansen", message: "Jeg er her også!", date: "20-11-2020", img: "image", id: "9", time: "01.34 PM" },
    { name: "Rune Jensen", message: "Super!", date: "20-11-2020", img: "image", id: "10", time: "04.17 PM" },
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
