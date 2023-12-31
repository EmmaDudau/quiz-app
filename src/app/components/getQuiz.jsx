import axios from 'axios';

// Function to call the OpenAI API
const getQuiz = async (subject) => {
    try {
        const params = {
            'prompt': `Generate a quiz question on the subject ${subject}`,
            'max_tokens': 60
        };
        const headers = { 'Authorization': `Bearer YOUR_OPENAI_API_KEY` };
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', params, { headers: headers });

        if (response?.data?.choices[0]?.text) {
            return response.data.choices[0].text;
        }
        return 'Error in getting a Quiz';
    } catch (error) {
        console.log(error);
        return 'Error in getting a Quiz';
    }
};

// Usage
const quiz = getQuiz('history');
console.log('Quiz:', quiz);

//The function getQuiz takes the subject as a single parameter and returns a promise that resolves to a quiz generated by ChatGPT.
// It throws an error in case there are any issues with the API call.
//
// Please note that this is a basic usage example, and you might want to handle errors and other edge cases according to your application's needs.
// Make sure to add the OpenAI API key in a secure manner
// (like in environment variables) and not expose it in the client side for security reasons.