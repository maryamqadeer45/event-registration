Setup Guide

Prerequisites
- Node.js 18+
- A Firebase project with Firestore enabled

Local Environment
1) Create a Firebase web app in your project and copy config.
2) Update `src/firebase/config.js` with your credentials.
3) Install deps: `npm install`
4) Start dev server: `npm start`

Firestore Collections
- `events`: { title, date (YYYY-MM-DD), description, location, image? }
- `registrations`: { eventId, name, email, phone, timestamp }

Seeding Events
You can seed with `sampleEvents`:

```js
// example usage in a temporary script/component
import { sampleEvents } from './src/firebase/sampleData';
import { seedEvents } from './src/firebase/firestore';

await seedEvents(sampleEvents);
```

Security Rules (basic)
Apply in Firebase console under Firestore Rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /events/{eventId} {
      allow read: if true; // public events
      allow write: if request.auth != null && request.auth.token.admin == true; // admin only
    }

    match /registrations/{regId} {
      allow create: if true; // allow anyone to register
      allow read: if request.auth != null && request.auth.token.admin == true; // admin only
      allow update, delete: if false;
    }
  }
}
```

Optional: Admin
- Use Firebase Authentication and custom claims for `admin`.
- Alternatively, view registrations directly in Firestore as per project scope.

# 🚀 Quick Setup Guide

## Step 1: Firebase Project Setup

1. **Create Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Create a project"
   - Enter project name: "Event Registration System"
   - Enable Google Analytics (optional)

2. **Enable Firestore Database**
   - In your Firebase project, go to "Firestore Database"
   - Click "Create database"
   - Choose "Start in test mode" (for development)
   - Select a location (choose closest to your users)

3. **Get Firebase Configuration**
   - Go to Project Settings (gear icon)
   - Scroll down to "Your apps"
   - Click "Web" icon to add a web app
   - Register your app with a nickname
   - Copy the Firebase configuration object

## Step 2: Environment Configuration

1. **Create .env file** in the project root:
```env
REACT_APP_FIREBASE_API_KEY=your-api-key-here
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
REACT_APP_FIREBASE_APP_ID=your-app-id
```

2. **Replace the values** with your actual Firebase configuration

## Step 3: Add Sample Events

1. **Go to Firestore Database** in Firebase Console
2. **Create Collection** named "events"
3. **Add Documents** with the following structure:

### Sample Event 1:
```json
{
  "title": "React Workshop - Fundamentals",
  "date": "2025-02-15",
  "description": "Learn React fundamentals in this comprehensive 3-hour workshop. Perfect for beginners who want to understand the basics of React development.",
  "location": "Saylani Tech Center, FSD"
}
```

### Sample Event 2:
```json
{
  "title": "JavaScript ES6+ Masterclass",
  "date": "2025-02-20",
  "description": "Deep dive into modern JavaScript features including arrow functions, destructuring, async/await, and more advanced concepts.",
  "location": "Tech Hub, Lahore"
}
```

### Sample Event 3:
```json
{
  "title": "Firebase Integration Workshop",
  "date": "2025-02-25",
  "description": "Learn how to integrate Firebase services including Firestore, Authentication, and Storage in your web applications.",
  "location": "Digital Campus, Karachi"
}
```

## Step 4: Firestore Security Rules

Update your Firestore rules to allow read/write access:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to events
    match /events/{document} {
      allow read: if true;
    }
    
    // Allow write access to registrations
    match /registrations/{document} {
      allow create: if true;
      allow read: if true; // For admin access
    }
  }
}
```

## Step 5: Run the Application

```bash
npm start
```

The application will open at `http://localhost:3000`

## 🎯 Testing the Application

1. **Home Page**: Should display welcome message and "View Events" button
2. **Events Page**: Should show your sample events in cards
3. **Registration**: Click "Register Now" on any event
4. **Form Validation**: Try submitting empty form to see validation
5. **Success Page**: Complete registration to see success message
6. **Firestore**: Check your Firestore database for new registrations

## 🔧 Troubleshooting

### Common Issues:

1. **"Firebase not configured" error**
   - Check your .env file exists and has correct values
   - Restart the development server after adding .env

2. **"Permission denied" error**
   - Check Firestore security rules
   - Ensure rules allow read/write access

3. **Events not loading**
   - Verify events collection exists in Firestore
   - Check browser console for errors
   - Ensure Firebase configuration is correct

4. **Styling issues**
   - Make sure Tailwind CSS is properly installed
   - Check if @tailwind directives are in index.css

## 📱 Mobile Testing

Test the responsive design:
- Open browser developer tools
- Toggle device toolbar
- Test on different screen sizes
- Verify all buttons and forms work on mobile

## 🚀 Ready to Deploy!

Once everything works locally, you can deploy to:
- Firebase Hosting
- Netlify
- Vercel
- Any static hosting service

---

**Your Event Registration System is now ready! 🎉**
