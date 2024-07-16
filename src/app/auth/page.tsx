'use client';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import LoginForm from './login';
import RegisterForm from './register';

function LoginRegister() {
  return (
    <body className="flex justify-center items-center h-screen w-screen bg-fixed bg-gradient-to-b from-[#007bff] to-[#e6f7ff]">
      <div className="scale-[0.76] w-[600px] max-h-full">
        <Tabs className="!rounded-2xl bg-muted p-1 mb-2" defaultActiveKey="login" fill>
          <Tab tabClassName="!rounded-xl" eventKey="login" title="Login">
            <LoginForm />
          </Tab>
          <Tab tabClassName="!rounded-xl" eventKey="register" title="Register">
            <RegisterForm />
          </Tab>
        </Tabs>
      </div>
    </body>
  )
}

export default LoginRegister;