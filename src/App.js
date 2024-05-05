import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify'; // Import only Amplify
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // Import the styles

Amplify.configure(awsconfig);

function App({ signOut }) {
  const handleSignOut = () => {
    signOut(); // Call the signOut function to initiate sign-out
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleSignOut}>Sign Out</button>
        <h2>My App Content</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
