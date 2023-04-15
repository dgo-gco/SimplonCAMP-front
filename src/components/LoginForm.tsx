import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import toast from "react-hot-toast";

const onFinish = async (values: any) => {
    try {
        await axios.post(`api/users/login`, values)
        toast('Successfully logged in', {icon: '👏'});
    } catch (error) {
        console.error(error)
        toast('Oh no! Something went wrong.');
    }
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const App: React.FC = () => (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="bg-red-100 w-screen h-screen flex flex-col justify-center items-center"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>
  
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
  
      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }} className="w-50">
        <Checkbox className="w-60">Remember me</Checkbox>
      </Form.Item>
  
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" className="bg-blue-100" >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
  
  export default App;