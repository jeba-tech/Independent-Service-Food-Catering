import React from 'react';
import './Blog.css';

const Blog = () => {
      return (
            <div >
                  <div className='blog'>
                        <h1>1. Difference between authorization and authentication</h1>
                        <p>Verifying someone's identity is the process of authentication, whereas confirming a user's access to a particular software, files, and data is the process of authorization. The scenario is similar to that of an airline that must choose which passengers to allow to board.Authentication is the first step of a good identity and access management process.Authorization always takes place after authentication.
                              Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authorization works through settings that are implemented and maintained by the organization.</p>
                        <h1>2. Why are you using firebase? What other options do you have to implement authentication?</h1>
                        <p>Without refreshing the screen, Firebase enables real-time data synchronization across all platforms, including Android, iOS, and the web. Firebase integrates with Google Ads, AdMob, DoubleClick, Play Store, Data Studio, BigQuery, and Slack to help you manage and maintain your apps effectively.


                        </p>
                        <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                        <h1>3. What other services does firebase provide other than authentication</h1>
                        <p>There are many services which Firebase provides, Most useful of them are:
                              Cloud Firestore,
                              Cloud Functions,
                              Authentication,
                              Hosting,
                              Cloud Storage,
                              Google Analytics,
                              Predictions,
                              Cloud Messaging.</p>
                  </div>
            </div>
      );
};

export default Blog;