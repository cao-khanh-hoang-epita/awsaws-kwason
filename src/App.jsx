import React, { useState, useEffect } from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // Import the styles
import { generateClient } from "aws-amplify/api";

import { listServices } from './graphql/queries';
import { getService } from './graphql/queries'; // Import getService query

Amplify.configure(awsconfig);

function App({ signOut }) {
  const handleSignOut = () => {
    signOut(); // Call the signOut function to initiate sign-out
  }

  const [Services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const client = generateClient({ queries: [listServices] });
      const ServiceData = await client.query(listServices);
      const ServiceList = ServiceData.data.listServices.items;
      console.log('Service list', ServiceList);
      setServices(ServiceList);
    } catch (error) {
      console.log('error on fetching Services', error);
    }
  };

  const fetchService = async (id) => {
    try {
      const client = generateClient({ queries: [getService] });
      const ServiceData = await client.query(getService, { id });
      console.log('Service data', ServiceData);
    } catch (error) {
      console.log('error on fetching Service', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleSignOut}>Sign Out</button>
        <h2>My App Content</h2>
      </header>
      <div className="ServiceList">
        {Services.map((Service, idx) => {
          return (
            <div className="ServiceCard" key={`Service${idx}`}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <div>
                  <div className="Servicename">{Service.name}</div>
                  <div className="Servicedoctor">{Service.doctor}</div>
                </div>
              </div>
              <div>
                <button aria-label="like">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 3c1.7 0 3.2 1.3 4 3 .8-1.7 2.3-3 4-3s3.2 1.3 4 3c.8-1.7 2.3-3 4-3"></path>
                    <path d="M12 18l-1.1 2.1c-.2.4-.6.7-1.1.7s-.9-.3-1.1-.7l-1.1-2.1"></path>
                    <path d="M12 18l-1.1 2.1c-.2.4-.6.7-1.1.7s-.9-.3-1.1-.7l-1.1-2.1"></path>
                    <path d="M12 18l-1.1 2.1c-.2.4-.6.7-1.1.7s-.9-.3-1.1-.7l-1.1-2.1"></path>
                    <path d="M12 18l-1.1 2.1c-.2.4-.6.7-1.1.7s-.9-.3-1.1-.7l-1.1-2.1"></path>
                  </svg>
                  {Service.like}
                </button>
              </div>
              <div className="ServiceDescription">{Service.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withAuthenticator(App);
