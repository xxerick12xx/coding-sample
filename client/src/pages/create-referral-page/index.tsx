import { Button, Card, HeadingTag1, HeadingTag3 } from "./../../ui";

const CreateReferralPage = () => {
  return (
    <Card>
      <Card.Header>
        <HeadingTag1>Create Referral</HeadingTag1>
      </Card.Header>
      <Card.Content>
        <HeadingTag3 className="border-b">Personal Details</HeadingTag3>
        <HeadingTag3>Address</HeadingTag3>
        <Button>Create Referral</Button>
      </Card.Content>
    </Card>
  );
};

export default CreateReferralPage;
