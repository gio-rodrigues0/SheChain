import { useState } from "react";
import "./App.css";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  // organization: "org-0nmrFWw6wSm6xIJXSbx4FpTw",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

function App() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e, message) => {
    e.preventDefault();

    if (!message) return;
    setIsTyping(true);

    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);

    setMessage("");

await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        
        messages: [
          {
            role:'system', 
            content: `You are DianaBot, an automated service to help the costumer trading carbon credit. Ask what he is looking for then you give a suggestion between: Improved Cropland Management Project in Gaotang, Malatya 2 Landfill Gas Power Plant Project, REDD+ Café Apuí Agroforestry, Reducing Emissions from Deforestation Due to Slash-and-Burn Corn by Introducing Cacao Farming in Gorontalo Province, Indonesia. You wait to collect the entire order, then summarize it and check for a final`
          },
        {role: "user", content: message}
        ]
    })
      .then((res) => {
        msgs.push(res.data.choices[0].message);
        setIsTyping(false);
      })
      .catch((error) => {
        console.log(error);
        setIsTyping(false);
      });
    
      setChats(msgs)
    }

    return (
        <main>
          <h1>Chat AI Tutorial</h1>
    
          <section>
            {chats && chats.length
              ? chats.map((chat, index) => (
                  <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
                    <span>
                      <b>{chat.role.toUpperCase()}</b>
                    </span>
                    <span>:</span>
                    <span>{chat.content}</span>
                  </p>
                ))
              : ""}
          </section>
    
          <div className={isTyping ? "" : "hide"}>
            <p>
              <i>{isTyping ? "Typing. . ." : ""}</i>
            </p>
          </div>
    
          <form action="" onSubmit={(e) => chat(e, message)}>
            <input
              type="text"
              name="message"
              value={message}
              placeholder="Type a message here and hit Enter..."
              onChange={(e) => setMessage(e.target.value)}
            />
          </form>
        </main>
      );
}

export default App;