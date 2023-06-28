import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EmailVerification() {
  const { token } = useParams();
  const [verificationStatus, setVerificationStatus] = useState('');
  const [userVerified, setUserVerified] = useState(false);

  useEffect(() => {
    verifyEmail();
  }, []);

  const verifyEmail = () => {
    fetch(`http://localhost:5000/verify/${token}`)
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Email verification successful') {
          setVerificationStatus('User verified successfully');
          setUserVerified(true);
        } else {
          setVerificationStatus('Error verifying user');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setVerificationStatus('Error verifying user');
      });
  };

  return (
    <div>
       
      <div>{verificationStatus}</div>
      {userVerified && <div>Database verified: true</div>}
    </div>
  );
}

export default EmailVerification;
