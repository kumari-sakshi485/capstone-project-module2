function frameStory(inputString) {
    // Split the input string into an array of words
    const words = inputString.split(' ');
  
    // Define the mapping of parts of speech
    const partOfSpeechMapping = {
      adjective: ['big', 'elegant', 'red', 'furry'],
      noun: ['cat', 'dog', 'horse', 'moon'],
      verb: ['chased', 'trotted', 'jumped', 'howled'],
    };
  
    // Initialize an output array to store the story
    const story = [];
  
    // Loop through the words and replace them with random parts of speech
    for (const word of words) {
      // Generate a random index for the parts of speech arrays
      const randomIndex = Math.floor(Math.random() * partOfSpeechMapping[word]);
  
      // Replace the word with a random part of speech
      story.push(partOfSpeechMapping[word][randomIndex]);
    }
  
    // Join the story array into a single string
    const outputString = story.join(' ');
  
    return outputString;
  }
  
  // Example usage:
  const input1 = "An adjective noun verb over the adjective";
  const input2 = "The noun verb the adjective noun.";
  
  const bestCaseOutput1 = frameStory(input1);
  const worstCaseOutput1 = frameStory(input1);
  
  const bestCaseOutput2 = frameStory(input2);
  const worstCaseOutput2 = frameStory(input2);
  
  console.log("Best-case scenario output 1:", bestCaseOutput1);
  console.log("Worst-case scenario output 1:", worstCaseOutput1);
  console.log("Best-case scenario output 2:", bestCaseOutput2);
  console.log("Worst-case scenario output 2:", worstCaseOutput2);

  //Best Case Scenario: In the best-case scenario, the function randomly selects words that create a coherent and interesting story. For example, it might select words like "An elegant horse trotted" or "The dog chased the big cat."

//Worst Case Scenario: In the worst-case scenario, the function randomly selects words that do not form a coherent story. For example, it might select words like "big trotted trotted red" or "cat chased howled big big."