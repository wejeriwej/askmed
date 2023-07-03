const prompt = "Create a multiple choice style question that is similar to Passmedicine and the AKT papers with 5 different answer options from A to E, with eqch oàf the answer options on a different line, based on the following information:"


const generateResponse = async (input) => {
    const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`
      },
      body: JSON.stringify({
        prompt: prompt + '\n' + input + '\n' + 'There must only be 1 correct answer in the answer options, and make sure that all the other answer options are incorrect. ' + '\n' + 'Question: ',
        //output the different answer options each on a new line
        temperature: 0.1,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      })
    });
  
    const { choices } = await response.json();
    return choices[0].text.trim();
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputField');
    const submitButton = document.getElementById('submitButton');
    const responseArea = document.getElementById('responseArea');
  
    submitButton.addEventListener('click', async () => {
      const input = inputField.value;
      const output = await generateResponse(input);
      responseArea.textContent = output;
    });
  });
  