import { SubmitHandler } from "react-hook-form";

import {
  Button,
  Card,
  HeadingTag1,
  HeadingTag3,
  Form,
  Input,
} from "./../../ui";

import { useCreateReferralHook } from "./create-referral-page.hooks";
import { type FormFieldsProps } from "./create-referral-page.schema";

const CreateReferralPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useCreateReferralHook();

  const handleFormSubmit: SubmitHandler<FormFieldsProps> = async (formData) => {
    console.log("Registering with:", formData);
    fetch(`${import.meta.env.VITE_API_ENDPOINT}/user`, {
      method: "POST",
      body: JSON.stringify(formData),
    });
  };

  return (
    <Card>
      <Card.Header>
        <HeadingTag1>Create Referral</HeadingTag1>
      </Card.Header>
      <Card.Content>
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <HeadingTag3>Personal Details</HeadingTag3>
          <Form.Group>
            <Form.Item>
              <Form.Label htmlFor="given_name">GIVEN NAME</Form.Label>
              <Input
                {...register("given_name")}
                id="given_name"
                type="string"
              />
              {errors.given_name && (
                <Form.ErrorLabel htmlFor="given_name">
                  {errors.given_name.message}
                </Form.ErrorLabel>
              )}
            </Form.Item>
            <Form.Item>
              <Form.Label htmlFor="last_name">SURNAME</Form.Label>
              <Input {...register("last_name")} id="last_name" type="string" />
              {errors.last_name && (
                <Form.ErrorLabel htmlFor="last_name">
                  {errors.last_name.message}
                </Form.ErrorLabel>
              )}
            </Form.Item>
            <Form.Item>
              <Form.Label htmlFor="email">EMAIL</Form.Label>
              <Input {...register("email")} id="last_name" type="string" />
              {errors.email && (
                <Form.ErrorLabel htmlFor="email">
                  {errors.email.message}
                </Form.ErrorLabel>
              )}
            </Form.Item>
            <Form.Item>
              <Form.Label htmlFor="phone">PHONE</Form.Label>
              <Input {...register("phone")} id="phone" type="string" />
              {errors.phone && (
                <Form.ErrorLabel htmlFor="phone">
                  {errors.phone.message}
                </Form.ErrorLabel>
              )}
            </Form.Item>
          </Form.Group>

          <HeadingTag3>Address</HeadingTag3>
          <Form.Group>
            <Form.Item>
              <Form.Label htmlFor="house_number">HOUSE NUMBER</Form.Label>
              <Input
                {...register("house_number")}
                id="house_number"
                type="string"
              />
              {errors.house_number && (
                <Form.ErrorLabel htmlFor="house_number">
                  {errors.house_number.message}
                </Form.ErrorLabel>
              )}
            </Form.Item>

            <Form.Item>
              <Form.Label htmlFor="street">STREET</Form.Label>
              <Input {...register("street")} id="street" type="string" />
              {errors.street && (
                <Form.ErrorLabel htmlFor="street">
                  {errors.street.message}
                </Form.ErrorLabel>
              )}
            </Form.Item>

            <Form.Item>
              <Form.Label htmlFor="suburb">SUBURB</Form.Label>
              <Input {...register("suburb")} id="suburb" type="string" />
              {errors.suburb && (
                <Form.ErrorLabel htmlFor="suburb">
                  {errors.suburb.message}
                </Form.ErrorLabel>
              )}
            </Form.Item>

            <Form.Item>
              <Form.Label htmlFor="state">STATE</Form.Label>
              <Input {...register("state")} id="state" type="string" />
              {errors.state && (
                <Form.ErrorLabel htmlFor="state">
                  {errors.state.message}
                </Form.ErrorLabel>
              )}
            </Form.Item>

            <Form.Item>
              <Form.Label htmlFor="postcode">POSTCODE</Form.Label>
              <Input {...register("postcode")} id="postcode" type="string" />
              {errors.postcode && (
                <Form.ErrorLabel htmlFor="postcode">
                  {errors.postcode.message}
                </Form.ErrorLabel>
              )}
            </Form.Item>

            <Form.Item>
              <Form.Label htmlFor="country">COUNTRY</Form.Label>
              <Input {...register("country")} id="country" type="string" />
              {errors.country && (
                <Form.ErrorLabel htmlFor="country">
                  {errors.country.message}
                </Form.ErrorLabel>
              )}
            </Form.Item>
          </Form.Group>
          <Form.Group>
            <Button variant="outline">Upload Avatar</Button>
            <Button>Create Referral</Button>
          </Form.Group>
        </Form>
      </Card.Content>
    </Card>
  );
};

export default CreateReferralPage;
