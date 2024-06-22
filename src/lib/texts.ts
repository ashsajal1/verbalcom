type VerbalCommunicationCategory =
  | "Interpersonal Communication"
  | "Public Speaking"
  | "Small Group Communication"
  | "Written Communication"
  | "Formal Communication"
  | "Informal Communication"
  | "Mass Communication"
  | "Storytelling"
  | "Persuasive Communication"
  | "Instructional Communication";

interface CommunicationSample {
  id: string;
  text: string;
  category: VerbalCommunicationCategory;
  bn?: string;
}

export const communicationSamples: CommunicationSample[] = [
  {
    id: "1",
    text: "Hey, how was your weekend? I went hiking with some friends.",
    category: "Interpersonal Communication",
    bn: "হেই, তোমার সাপ্তাহিক ছুটি কেমন কাটলো? আমি কিছু বন্ধুর সাথে হাইকিংয়ে গিয়েছিলাম।",
  },
  {
    id: "2",
    text: "Good morning everyone. Today, we will discuss the quarterly financial results.",
    category: "Public Speaking",
    bn: "সুপ্রভাত সবাইকে। আজ আমরা ত্রৈমাসিক আর্থিক ফলাফল নিয়ে আলোচনা করবো।",
  },
  {
    id: "3",
    text: "I think we should brainstorm ideas for the new project. Any thoughts?",
    category: "Small Group Communication",
    bn: "আমার মনে হয় আমাদের নতুন প্রকল্পের জন্য আইডিয়া নিয়ে আলোচনা করা উচিত। কোনো চিন্তা আছে?",
  },
  {
    id: "4",
    text: "Dear Sir/Madam, I am writing to apply for the position of Software Engineer at your esteemed company.",
    category: "Written Communication",
    bn: "প্রিয় মহোদয়/মহোদয়া, আমি আপনার মর্যাদাপূর্ণ কোম্পানিতে সফটওয়্যার ইঞ্জিনিয়ার পদের জন্য আবেদন করছি।",
  },
  {
    id: "5",
    text: "In accordance with company policy, all employees are required to attend the annual training session.",
    category: "Formal Communication",
    bn: "কোম্পানির নীতি অনুযায়ী, সকল কর্মচারীকে বার্ষিক প্রশিক্ষণ সেশনে উপস্থিত থাকতে হবে।",
  },
  {
    id: "6",
    text: "Let's grab a coffee and catch up later!",
    category: "Informal Communication",
    bn: "চল কফি খেতে যাই এবং পরে আড্ডা দিই!",
  },
  {
    id: "7",
    text: "Breaking News: A major earthquake has struck the downtown area. More details to follow.",
    category: "Mass Communication",
    bn: "ব্রেকিং নিউজ: একটি বড় ভূমিকম্প শহরের কেন্দ্রে আঘাত হেনেছে। আরও বিস্তারিত আসছে।",
  },
  {
    id: "8",
    text: "Once upon a time, in a land far away, there was a brave knight who...",
    category: "Storytelling",
    bn: "এক দেশে ছিল এক সাহসী নাইট, যিনি...",
  },
  {
    id: "9",
    text: "This product will not only save you money, but it will also make your life easier.",
    category: "Persuasive Communication",
    bn: "এই পণ্যটি শুধুমাত্র আপনার অর্থ সাশ্রয় করবে না, এটি আপনার জীবনও সহজ করবে।",
  },
  {
    id: "10",
    text: "First, preheat the oven to 350 degrees Fahrenheit. Next, mix the flour and sugar together.",
    category: "Instructional Communication",
    bn: "প্রথমে, ওভেনটি ৩৫০ ডিগ্রি ফারেনহাইট পর্যন্ত গরম করুন। পরের ধাপে, ময়দা এবং চিনি মিশিয়ে নিন।",
  },
];
