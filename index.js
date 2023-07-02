<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Login</title>
    <style type="text/css">
      body {
        padding: 0;
        margin: 0;
        font-family: Inter, sans-serif;
      }

      .title-container {
        width: 35%;
        background-color: black;
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100%;
      }

      .heading {
        font-weight: 600;
        font-size: 38px;
      }

      .sign-in-container {
        width: 71%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      .sign-in-block {
      }

      .auth-btn {
        border: none;
        text-align: center;
        border-radius: 5px;
        background-color: #ebebeb;
        padding: 8px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: grey;
        margin: 10px;
      }

      .btn-container {
        display: flex;
        flex-direction: row;
        margin-bottom: 30px;
      }

      .input-container {
        display: flex;
        flex-direction: column;
        margin: 10px;
      }

      .input-cls {
        height: 32px;
        width: 100%;
        border-radius: 5px;
        border: none;
        background-color: #ebebeb;
        padding: 5px;
        font-size: 14px;
      }

      .link {
        color: #2150fd;
        text-decoration: none;
        margin: 10px;
      }

      .sign-in {
        background-color: black;
        border-radius: 10px;
        color: white;
        font-weight: bold;
        border: none;
        padding: 10px 0px;
        height: 40px;
        width: 96%;
        font-size: 16px;
      }

      .sign-in-btn-container {
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: start;
      }
    </style>
  </head>

  <body>
    <div style="height: 100vh; display: flex; flex-direction: row">
      <div class="title-container">
        <h1 class="heading">Board.</h1>
      </div>
      <div class="sign-in-container">
        <div class="sign-in-block">
          <h2 style="padding: 0px; margin: 0px">Sign In</h2>
          <p style="padding: 0px; margin: 0px">Sign in to your account</p>
          <div class="btn-container">
            <button class="auth-btn">
              <img src="google.png" style="width: 20px; height: 20px" />
              Sign in with Google
            </button>
            <button class="auth-btn">
              <img src="apple.png" style="width: 20px; height: 20px" />
              Sign in with Apple
            </button>
          </div>
          <div class="input-container">
            <label for="email">Email address</label>
            <input type="text" id="email" class="input-cls" />
          </div>
          <div class="input-container">
            <label for="password">Password</label>
            <input type="password" id="password" class="input-cls" />
          </div>
          <div>
            <a class="link" href="#">Forgot Password?</a>
          </div>
          <div class="sign-in-btn-container">
            <button class="sign-in">Sign In</button>
          </div>
          <p style="text-align: center; color: darkgrey">
            Don't have account? <a href="#" class="link">Register Here</a>
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
