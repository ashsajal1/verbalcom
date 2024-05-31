type VerbalCommunicationCategory = 
    "Interpersonal Communication" |
    "Public Speaking" |
    "Small Group Communication" |
    "Written Communication" |
    "Formal Communication" |
    "Informal Communication" |
    "Mass Communication" |
    "Storytelling" |
    "Persuasive Communication" |
    "Instructional Communication";

interface CommunicationSample {
    text: string;
    category: VerbalCommunicationCategory;
}

export const communicationSamples: CommunicationSample[] = [
    {
        text: "Hey, how was your weekend? I went hiking with some friends.",
        category: "Interpersonal Communication"
    },
    {
        text: "Good morning everyone. Today, we will discuss the quarterly financial results.",
        category: "Public Speaking"
    },
    {
        text: "I think we should brainstorm ideas for the new project. Any thoughts?",
        category: "Small Group Communication"
    },
    {
        text: "Dear Sir/Madam, I am writing to apply for the position of Software Engineer at your esteemed company.",
        category: "Written Communication"
    },
    {
        text: "In accordance with company policy, all employees are required to attend the annual training session.",
        category: "Formal Communication"
    },
    {
        text: "Let's grab a coffee and catch up later!",
        category: "Informal Communication"
    },
    {
        text: "Breaking News: A major earthquake has struck the downtown area. More details to follow.",
        category: "Mass Communication"
    },
    {
        text: "Once upon a time, in a land far away, there was a brave knight who...",
        category: "Storytelling"
    },
    {
        text: "This product will not only save you money, but it will also make your life easier.",
        category: "Persuasive Communication"
    },
    {
        text: "First, preheat the oven to 350 degrees Fahrenheit. Next, mix the flour and sugar together.",
        category: "Instructional Communication"
    }
];
