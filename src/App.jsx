
import React from "react";
import TreeView from "./TreeView";

const data = [
  {
    user: "Exciting_Redditor",
    text: `Well yep, unpopular opinion is indeed unpopular.

Women being entitled? Or having standards because they are not as naive as they were in their 20s?`,
    replies: [
      {
        user: "Carg_reducer",
        text: `>they are not as naive as they were in their 20s?

age is not wisdom. there is no reason to belive that people are smarter at 35 and naive at 23.

stop projecting`,
        replies: [
          {
            user: "Exciting_Redditor",
            text: "What am I projecting?",
            replies: [
              {
                user: "Carg_reducer",
                text: `women are stupid at 23 and smart at 35.

the brain imaging differes with your opinions.

learn science,`,
                replies: [
                  {
                    user: "Exciting_Redditor",
                    text: `Not really. I didn’t say that either. I didn’t mention intelligence. I didn’t realise this was a controversial statement.`,
                    replies: [
                      {
                        user: "Carg_reducer",
                        text: `>wisdom comes with age/experience,

expect it does not.

wisdom is an unconditionally non scientific word.`,
                        replies: [
                          {
                            user: "Exciting_Redditor",
                            text: `I didn’t say that though, you used the word wisdom. Not me.`,
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

function App() {
  return (
    <div style={{ padding: "40px", backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#2c3e50" }}>
        Reddit-style Comment Thread
      </h2>
      <TreeView data={data} />
    </div>
  );
}

export default App;
