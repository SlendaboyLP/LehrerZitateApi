import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useParams } from "react-router-dom";

import { Card } from "antd";

const onFinish = (values) => {
  fetch("https://localhost:7183/api/LehrerZitate", {
    method: "PUT",
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

const getQuote = async (id) => {
  const response = await fetch(
    `https://localhost:7183/api/LehrerZitate/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      "Access-Control-Allow-Origin": "*",
    }
  );
  return await response.json();
};

export default function AddQuote() {
  const { id } = useParams();
  const [quote, setQuote] = useState(getQuote(id));

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
          initialValue={quote.zitat}
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
          initialValue={quote.lehrer}
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
          <Input initialValue={quote.fakelehrer} />
        </Form.Item>

        <Form.Item name="Geposted" valuePropName="geposted">
          <Checkbox initialValue={quote.geposted}>geposted</Checkbox>
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
