import { Table, Button } from "./../../ui";
import { dummyData } from "./table-page.constant";
import { Trash, Pencil } from "lucide-react";

const ActionComponents = () => {
  return (
    <>
      <Button variant="ghost" size="icon">
        <Pencil fill="#111" color="#fff" />
      </Button>
      <Button variant="ghost" size="icon">
        <Trash fill="#111" color="#fff" />
      </Button>
    </>
  );
};
function TablePage() {
  return (
    <section>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>GIVEN NAME</Table.Head>
            <Table.Head>SURNAME</Table.Head>
            <Table.Head>EMAIL</Table.Head>
            <Table.Head>PHONE</Table.Head>
            <Table.Head>ACTIONS</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {dummyData.map((data) => (
            <Table.Row key={data.invoice}>
              <Table.Data>{data.invoice}</Table.Data>
              <Table.Data>{data.paymentStatus}</Table.Data>
              <Table.Data>{data.paymentMethod}</Table.Data>
              <Table.Data>{data.totalAmount}</Table.Data>
              <Table.Data>
                <ActionComponents />
              </Table.Data>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </section>
  );
}

export default TablePage;
