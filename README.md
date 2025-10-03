# Event Registration System

A modern, responsive web application built with React and Firebase for event registration and management.

## 🚀 Features

- **Home Page**: Beautiful landing page with call-to-action
- **Events List**: Display all upcoming events in a responsive grid
- **Registration Form**: Comprehensive form with validation
- **Success Page**: Confirmation page after successful registration
- **Responsive Design**: Works perfectly on desktop and mobile
- **Firebase Integration**: Real-time data storage with Firestore
- **Form Validation**: Client-side validation for all inputs
- **Loading States**: Smooth loading indicators throughout the app

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Backend**: Firebase Firestore
- **Authentication**: Firebase Auth (optional)
- **Icons**: Heroicons (SVG)

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.jsx       # Navigation header
│   ├── EventCard.jsx    # Event display card
│   └── Spinner.jsx      # Loading spinner
├── pages/               # Main application pages
│   ├── HomePage.jsx     # Landing page
│   ├── EventsList.jsx   # Events listing page
│   ├── RegisterForm.jsx # Registration form
│   └── SuccessPage.jsx  # Success confirmation
├── firebase/            # Firebase configuration
│   ├── config.js        # Firebase setup
│   ├── firestore.js     # Firestore operations
│   └── sampleData.js    # Sample events data
├── routes/              # React Router setup
│   └── AppRoutes.jsx    # Route definitions
├── App.js               # Main app component
└── index.css            # Global styles with Tailwind
```

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd event-registration-system
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Get your Firebase configuration
4. Create a `.env` file in the root directory:

```env
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
REACT_APP_FIREBASE_APP_ID=your-app-id
```

### 4. Firestore Collections Setup

Create two collections in your Firestore database:

#### Events Collection (`events`)
```javascript
{
  "title": "React Workshop",
  "date": "2025-02-15",
  "description": "Learn React fundamentals in this 3-hour session",
  "location": "Saylani Tech Center, FSD"
}
```

#### Registrations Collection (`registrations`)
```javascript
{
  "eventId": "event-doc-id",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "0300-1234567",
  "timestamp": "Firebase server timestamp"
}
```

### 5. Add Sample Data

Use the sample data provided in `src/firebase/sampleData.js` to populate your events collection.

### 6. Run the Application
```bash
npm start
```

The application will open at `http://localhost:3000`

## 📱 Pages & Routes

- **`/`** - HomePage: Landing page with welcome message
- **`/events`** - EventsList: Display all available events
- **`/register/:eventId`** - RegisterForm: Registration form for specific event
- **`/success`** - SuccessPage: Confirmation after successful registration

## 🎨 UI Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with gradients and shadows
- **Interactive Elements**: Hover effects and smooth transitions
- **Loading States**: Spinners and loading indicators
- **Error Handling**: User-friendly error messages
- **Form Validation**: Real-time validation with helpful error messages

## 🔒 Form Validation

The registration form includes comprehensive validation:

- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Phone**: Required, valid phone number format

## 🚀 Deployment

### Firebase Hosting (Recommended)

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Build the project:
```bash
npm run build
```

3. Initialize Firebase hosting:
```bash
firebase init hosting
```

4. Deploy:
```bash
firebase deploy
```

### Other Hosting Platforms

The built files in the `build` folder can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## 🧪 Testing

To test the application:

1. Add sample events to your Firestore database
2. Navigate through all pages
3. Test the registration form with various inputs
4. Verify data is saved to Firestore
5. Test responsive design on different screen sizes

## 📝 Customization

### Adding New Features

- **Authentication**: Uncomment Firebase Auth in `config.js`
- **Admin Panel**: Create admin routes and components
- **Event Images**: Add image upload functionality
- **Email Notifications**: Integrate with email services
- **Payment Integration**: Add payment processing

### Styling

The app uses Tailwind CSS. Customize colors and styles in:
- `tailwind.config.js` - Theme configuration
- `src/index.css` - Global styles
- Component files - Component-specific styles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues:

1. Check the Firebase configuration
2. Verify Firestore rules allow read/write access
3. Check browser console for errors
4. Ensure all dependencies are installed

## 🎯 Future Enhancements

- [ ] User authentication with Google/Facebook
- [ ] Admin dashboard for event management
- [ ] Email notifications for registrations
- [ ] Event image uploads
- [ ] Payment integration
- [ ] Event categories and filtering
- [ ] User profiles and registration history
- [ ] QR code generation for event tickets

---

**Built with ❤️ using React and Firebase**