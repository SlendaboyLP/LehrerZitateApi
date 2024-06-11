import { useState } from "react";
import { Card, List } from "antd";

const getQuotes = async () => {
  const response = await fetch("https://localhost:7183/api/LehrerZitate");
  return await response.json();
};
export default function ReadAllQuotes() {
  const [quotes, setQuotes] = useState(getQuotes());
  return (
    <Card title="Alle Zitate" style={{ maxWidth: 600 }}>
      <List
        itemLayout="horizontal"
        dataSource={quotes}
        renderItem={(quote) => (
          <List.Item>
            <List.Item.Meta title={quote.zitat} description={quote.lehrer} />
          </List.Item>
        )}
      />
    </Card>
  );
}
