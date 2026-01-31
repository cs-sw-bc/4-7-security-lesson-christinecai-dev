1. Data validation: user has typed in the correct email and password
2. Sanitization: cleaning up the data -- extra space and line
3. Password hashing: does not store data as plan text but a ciphertext
    -used password as plain text

1. add required to email and password
- novalidate: no validation from the browser

onsubmit = "returnvalidateLogin(event)" : if return false, the form will not be submitted (validation.js)