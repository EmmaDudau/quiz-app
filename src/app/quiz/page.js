// "use client"
//
//
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router'
// import { OpenAI } from 'openai';
//
// const GPT_API_KEY = process.env.OPENAI_API_KEY //set your OpenAI key here
//
// function SubjectQuiz () {
//     const router = useRouter();
//     const { subject } = router.query; // getting parameter from URL
//     const [question, setQuestion] = useState(null);
//
//     useEffect(() => {
//         if(subject) {
//             const openai = new OpenAI(GPT_API_KEY);
//             openai.complete({
//                 engine: "davinci-codex",
//                 prompt: `Generate a multiple choice question about ${subject}.`,
//                 max_tokens: 60,
//             })
//                 .then(response => setQuestion(response.choices[0].text.trim()))
//                 .catch(err => console.error(err))
//         }
//     }, [subject]);
//
//     return (
//         <div>
//             <h1>{subject} Quiz</h1>
//
//             {question &&
//                 <div>
//                     <h2>Question</h2>
//                     <p>{question}</p>
//                 </div>
//             }
//         </div>
//     )
// }
//
// export default SubjectQuiz;
