import { Table } from "./../../ui";
import { dummyData } from "./table-page.constant";

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
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Data colSpan={3}>Total</Table.Data>
            <Table.Data className="text-right">$2,500.00</Table.Data>
          </Table.Row>
        </Table.Footer>
      </Table>
    </section>
  );
}

export default TablePage;
