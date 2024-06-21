import { useState } from "react";
import { Card, List } from "antd";
import { useEffect } from "react";

const getQuotes = async () => {
  const response = await fetch("https://localhost:7183/api/LehrerZitate", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return await response.json();
};
export default async function ReadAllQuotes() {
  const [quotes, setQuotes] = useState();

  useEffect(async () => {
    await getQuotes().then((quotes) => setQuotes(quotes));
  }, []);

  return (
    <></>
    // <Card title="Alle Zitate" style={{ maxWidth: 600 }}>
    //   <List
    //     itemLayout="horizontal"
    //     dataSource={quotes}
    //     renderItem={(quote) => (
    //       <List.Item>
    //         <List.Item.Meta title={quote.zitat} description={quote.lehrer} />
    //       </List.Item>
    //     )}
    //   />
    // </Card>
  );
}
