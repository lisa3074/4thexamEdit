import React, { useEffect, useState } from "react";
import ChatNav from "./ChatNav";
import MessageBoard from "./MessageBoard";
import NewMessage from "./NewMessage";
import { getMessages } from "../../jsModules/dbData/getData";

export default function Chat(props) {
  console.log("chat || Chat.js | Chat()");
  /* const [messages, setMessages] = useState(); */
  const { signedinUser } = props;
  //console.log(props.signedInUser);
  /*   useEffect(() => {
    getMessages(setMessages);
  }, [signedinUser]); */

  console.log(signedinUser);
  /* const messages1 = [
    { name: "Lisa Søndergaard", message: "Hej med jer!", date: "20-11-2020", img: "image", id: "1" },
    {
      name: "Anja Andersen",
      message: "Hvem er på arbejde i dag?",
      date: "1606392346268",
      img: "image",
      id: "2",
    },
    {
      name: "Lisa Søndergaard",
      message: "Jeg tror alle undtagen Bob.",
      date: "20-11-2020",
      img: "image",
      id: "3",
    },
    {
      name: "Bob hund",
      message: "Nej jeg er her også...",
      date: "20-11-2020",
      img: "image",
      id: "4",
    },
    {
      name: "Anja Andersen",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, som dates by accident, som dates on purpose (injected humour and the like).",
      date: "20-11-2020",
      img: "image",
      id: "5",
    },
    { name: "Bob Hund", message: "Ja man har sgu da aldrig fri.", date: "20-11-2020", img: "image", id: "6" },
    {
      name: "Rune Jensen",
      message: "Så er det godt du elsker dit arbejde :)",
      date: "20-11-2020",
      img: "image",
      id: "7",
    },
    {
      name: "Lisa Søndergaard",
      message: "Jeg tror alle er her i dag, når Bob er her.",
      date: "20-11-2020",
      img: "image",
      id: "8",
    },
    { name: "Mikkel Hansen", message: "Jeg er her også!", date: "20-11-2020", img: "image", id: "9" },
    { name: "Rune Jensen", message: "Super!", date: "20-11-2020", img: "image", id: "10" },
  ]; */

  return (
    <main className="Chat hide">
      <div className="chat-wrapper">
        <ChatNav />
        <MessageBoard messages={props.messages} users={props.users} signedinUser={signedinUser} />
        <NewMessage />
      </div>
    </main>
  );
}
/* myMessages={messages.filter((me) => me.name === "Lisa Søndergaard")}
          yourMessages={messages.filter((you) => you.name !== "Lisa Søndergaard")} */
