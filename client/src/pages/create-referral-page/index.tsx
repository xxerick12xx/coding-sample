import {
  Button,
  Card,
  HeadingTag1,
  HeadingTag3,
  Form,
  Input,
} from "./../../ui";

const CreateReferralPage = () => {
  return (
    <Card>
      <Card.Header>
        <HeadingTag1>Create Referral</HeadingTag1>
      </Card.Header>
      <Card.Content>
        <Form>
          <HeadingTag3>Personal Details</HeadingTag3>

          <Form.Group>
            <Form.Item>
              <Input />
            </Form.Item>
            <Form.Item>
              <Input />
            </Form.Item>
            <Form.Item>
              <Input />
            </Form.Item>
            <Form.Item>
              <Input />
            </Form.Item>
          </Form.Group>

          <HeadingTag3>Address</HeadingTag3>

          <Form.Group>
            <Form.Item>
              <Input />
            </Form.Item>
            <Form.Item>
              <Input />
            </Form.Item>
            <Form.Item>
              <Input />
            </Form.Item>
            <Form.Item>
              <Input />
            </Form.Item>
          </Form.Group>

          <Form.Group>
            <Button variant="secondary">Create Referral</Button>
            <Button>Create Referral</Button>
          </Form.Group>
        </Form>
      </Card.Content>
    </Card>
  );
};

export default CreateReferralPage;
