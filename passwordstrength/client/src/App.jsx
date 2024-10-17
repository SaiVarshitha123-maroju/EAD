import React, { useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handlePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  const checkPasswordStrength = (password) => {
    let passwordScore = 0;

    // Loop through each character in the password and check its type
    for (let i = 0; i < password.length; i++) {
      const char = password[i];

      // Check if the character is an uppercase letter
      if (/[A-Z]/.test(char)) {
        passwordScore++;
        console.log("Uppercase letter found:", char);
      }
      // Check if the character is a lowercase letter
      else if (/[a-z]/.test(char)) {
        passwordScore++;
        console.log("Lowercase letter found:", char);
      }
      // Check if the character is a digit
      else if (/[0-9]/.test(char)) {
        passwordScore++;
        console.log("Digit found:", char);
      }
      // Check if the character is a special character
      else if (/[^A-Za-z0-9]/.test(char)) {
        passwordScore++;
        console.log("Special character found:", char);
      }
    }

    console.log("Final passwordScore:", passwordScore);

    // Determine password strength based on score
    let strength = "Weak";
    if (passwordScore >= 10) {
      strength = "Strong";
    } else if (passwordScore >= 6) {
      strength = "Medium";
    }

    setStrength(strength);
  };
  const getStrengthColor = (strength) => {
    switch (strength) {
      case 'Strong':
        return 'darkgreen';
      
      case 'Medium':
        return 'orange';
      case 'Weak':
        return 'red';
      }
    };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handlePassword}
        placeholder="Enter your password"
        style={{ padding: "10px", fontSize: "16px", width: "100%" }}
      />
      <div style={{ marginTop: "10px", fontSize: "18px" }}>
        <strong>Password Strength: <h4 style={{color:getStrengthColor(strength)}}>
          {strength}
          </h4> </strong>
        
      </div>
    </div>
  );
};

export default App;
