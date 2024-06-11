import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

import { Card } from "antd";

const onFinish = (values) => {
  fetch("https://localhost:7183/api/LehrerZitate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Quote: values.zitat,
      Teacher: values.lehrer,
      FalseTeacher: values.fakelehrer,
      IsPosted: values.geposted,
    }),
    "Access-Control-Allow-Origin": "*",
  });
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function AddQuote() {
  return (
    <Card title="Neues Zitat hinzufügen" style={{ maxWidth: 600 }}>
      <Form
        name="basic"
        layout="vertical"
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          geposted: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Zitat"
          name="zitat"
          rules={[
            {
              required: true,
              message: "Zitat eingeben",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Lehrer"
          name="lehrer"
          rules={[
            {
              required: true,
              message: "Lehrer eingeben",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Fake Lehrer" name="fakelehrer">
          <Input />
        </Form.Item>

        <Form.Item name="Geposted" valuePropName="geposted">
          <Checkbox>geposted</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Abschicken
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
