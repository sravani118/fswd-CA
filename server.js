const express = require('express');
const app = express();
const port = 3000;

app.get('/signup', (req, res) => {
    const { username, password,dob, email } = req.query;
    

    
    if (username) {
        for (let i = 0; i < username.length; i++) {
            if (!((username[i] >= 'a' && username[i] <= 'z') || (username[i] >= 'A' && username[i] <= 'Z'))) {
                return res.send("Username cannot be provided");
            }
        }
    }

    
    if (email) {
        if (!email.includes('@') || !email.includes('.') || email.indexOf('@') > email.lastIndexOf('.')) {
            return res.send("Email cannot be provided");
        }
    }

    
    if (password) {
        if (password.length < 8 || password.length >= 16) {
            return res.send("Password length should be greater than 8 or less than or equal to 16");
        }
    }
    

  
    res.send("Signup successful!");
});


app.listen(port, () => {
    console.log(`Server is running live on http://localhost:${port}`);
});