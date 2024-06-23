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
  {
    id: "11",
    text: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender.",
    category: "Public Speaking",
    bn: "আমরা সৈকতে যুদ্ধ করব, আমরা অবতরণস্থলে যুদ্ধ করব, আমরা মাঠে এবং রাস্তায় যুদ্ধ করব, আমরা পাহাড়ে যুদ্ধ করব; আমরা কখনই আত্মসমর্পণ করব না।",
  },
  {
    id: "12",
    text: "In our small group discussion, we analyzed the impacts of the Industrial Revolution.",
    category: "Small Group Communication",
    bn: "আমাদের ছোট দলে আলোচনা করে আমরা শিল্প বিপ্লবের প্রভাব বিশ্লেষণ করেছি।",
  },
  {
    id: "13",
    text: "The Magna Carta, signed in 1215, laid the foundation for many constitutional principles.",
    category: "Written Communication",
    bn: "১২১৫ সালে স্বাক্ষরিত ম্যাগনা কার্টা অনেক সাংবিধানিক নীতির ভিত্তি স্থাপন করেছিল।",
  },
  {
    id: "14",
    text: "Distinguished guests, it is an honor to address you at this historic event.",
    category: "Formal Communication",
    bn: "বিশিষ্ট অতিথিবৃন্দ, এই ঐতিহাসিক অনুষ্ঠানে আপনাদেরকে সম্বোধন করা একটি সম্মানের বিষয়।",
  },
  {
    id: "15",
    text: "Let's catch up at the usual spot after the lecture.",
    category: "Informal Communication",
    bn: "লেকচারের পর চলো পরিচিত জায়গায় দেখা করি।",
  },
  {
    id: "16",
    text: "Attention everyone: The city will host a historical reenactment this weekend.",
    category: "Mass Communication",
    bn: "সকলের দৃষ্টি আকর্ষণ করছি: শহরটি এই সপ্তাহান্তে একটি ঐতিহাসিক পুনঃনির্মাণ আয়োজন করবে।",
  },
  {
    id: "17",
    text: "Once upon a time, a brave knight embarked on a quest to save his kingdom.",
    category: "Storytelling",
    bn: "একদা, এক সাহসী নাইট তার রাজ্যকে বাঁচানোর জন্য একটি অভিযানে যাত্রা করেছিল।",
  },
  {
    id: "18",
    text: "To persuade the council, the mayor highlighted the benefits of the new policy.",
    category: "Persuasive Communication",
    bn: "পরিষদকে বোঝানোর জন্য মেয়র নতুন নীতির সুবিধাগুলি তুলে ধরেন।",
  },
  {
    id: "19",
    text: "To bake the perfect cake, follow these steps carefully.",
    category: "Instructional Communication",
    bn: "পারফেক্ট কেক তৈরি করতে, এই ধাপগুলি মনোযোগ সহকারে অনুসরণ করুন।",
  },
];
