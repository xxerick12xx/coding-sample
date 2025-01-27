import { Table, Card } from "./../../ui";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import ActionComponents from "./action-component";

function TablePageComponent() {
  const referralList = useSelector((state: RootState) => state.referral_list);
  return (
    <Card>
      <Card.Content>
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
            {referralList.data.map((data) => (
              <Table.Row key={`user+++${data.id}`}>
                <Table.Data>{data.given_name}</Table.Data>
                <Table.Data>{data.last_name}</Table.Data>
                <Table.Data>{data.email}</Table.Data>
                <Table.Data>{data.phone}</Table.Data>
                <Table.Data>
                  <ActionComponents id={data.id} />
                </Table.Data>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card.Content>
    </Card>
  );
}

export default TablePageComponent;
