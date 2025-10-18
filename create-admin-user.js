// Firebase Admin SDK se admin user create karne ke liye
// Ye script run karne se pehle Firebase Admin SDK install kariye: npm install firebase-admin

const admin = require('firebase-admin');

// Firebase service account key file path
const serviceAccount = require('./path-to-your-service-account-key.json');

// Firebase Admin initialize kariye
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Your Firebase project ID
  projectId: 'your-project-id'
});

// Admin user create kariye
async function createAdminUser() {
  try {
    const userRecord = await admin.auth().createUser({
      email: 'admin@yourapp.com',
      emailVerified: true,
      password: 'your-secure-password-here',
      displayName: 'Admin User',
      disabled: false,
    });

    console.log('✅ Admin user successfully created:', userRecord.uid);
    console.log('Email:', userRecord.email);
    console.log('UID:', userRecord.uid);
    
    // Optional: Custom claims set kariye admin ke liye
    await admin.auth().setCustomUserClaims(userRecord.uid, {
      admin: true,
      role: 'admin'
    });
    
    console.log('✅ Admin claims set successfully');
    
  } catch (error) {
    console.error('❌ Error creating admin user:', error);
  }
}

// Function run kariye
createAdminUser();
