// Sample data for testing the Event Registration System
// This file contains sample events that can be added to Firestore for testing

export const sampleEvents = [
  {
    title: "React Workshop - Fundamentals",
    date: "2025-02-15",
    description: "Learn React fundamentals in this comprehensive 3-hour workshop. Perfect for beginners who want to understand the basics of React development.",
    location: "Saylani Tech Center, FSD"
  },
  {
    title: "JavaScript ES6+ Masterclass",
    date: "2025-02-20",
    description: "Deep dive into modern JavaScript features including arrow functions, destructuring, async/await, and more advanced concepts.",
    location: "Tech Hub, Lahore"
  },
  {
    title: "Firebase Integration Workshop",
    date: "2025-02-25",
    description: "Learn how to integrate Firebase services including Firestore, Authentication, and Storage in your web applications.",
    location: "Digital Campus, Karachi"
  },
  {
    title: "UI/UX Design Principles",
    date: "2025-03-01",
    description: "Explore the fundamentals of user interface and user experience design. Learn about design systems, prototyping, and user research.",
    location: "Creative Studio, Islamabad"
  },
  {
    title: "Node.js Backend Development",
    date: "2025-03-05",
    description: "Build robust backend applications with Node.js. Cover Express.js, REST APIs, database integration, and deployment strategies.",
    location: "Code Academy, FSD"
  },
  {
    title: "Mobile App Development with React Native",
    date: "2025-03-10",
    description: "Create cross-platform mobile applications using React Native. Learn about navigation, state management, and native features.",
    location: "Mobile Tech Center, Lahore"
  }
];

// Instructions for adding sample data to Firestore:
/*
1. Go to your Firebase Console
2. Navigate to Firestore Database
3. Create a collection named "events"
4. Add documents with the following structure:
   - title: string
   - date: string (YYYY-MM-DD format)
   - description: string
   - location: string

You can copy the sampleEvents array above and add each event as a separate document.
*/
