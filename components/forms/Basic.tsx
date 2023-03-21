import { FC } from "react";
import { useForm } from "react-hook-form";
import { z, string } from "zod";
import { Button } from "../button";
import { Card } from "../card";
import { Input } from "../input";
import { Section } from "../section";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "./FormError";
import _ from "lodash";
import { toast } from "react-toastify";
import { inter } from "@/pages/_app";

interface BasicFormProps {}

const Schema = z
  .object({
    firstName: string().min(1),
    lastName: string().min(1),
    nickName: string().optional(),
    password: string()
      .min(8)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Invalid password"
      ),
    confirmPassword: string(),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: "Password and Confirm password fields does not match",
    path: ["confirmPassword"],
  });

/*
    At least 8 characters long
    Contains at least one lowercase letter
    Contains at least one uppercase letter
    Contains at least one digit
    Contains at least one special character from the set @$!%*?&
*/

type SchemaType = z.infer<typeof Schema>;

const BasicForm: FC<BasicFormProps> = () => {
  const { register, watch, handleSubmit, formState } = useForm<SchemaType>({
    resolver: zodResolver(Schema),
  });
  const { errors } = formState;

  const submitHandler = (val: any) => {
    toast.success("Submitted successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      className: inter.className,
    });
  };

  const submitFailedHandler = (val: any) => {
    toast.error("Oops! Please check your input and try again.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      className: inter.className,
    });
  };

  return (
    <Section className="bg-gray-300">
      <div data-aos="fade-up">
        <form onSubmit={handleSubmit(submitHandler, submitFailedHandler)}>
          <Card className="w-[500px] space-y-4">
            <div className="flex space-x-4">
              <div>
                <Input label="First Name" {...register("firstName")} />
                <FormError
                  isVisible={!!errors.firstName}
                  message={errors?.firstName?.message ?? ""}
                />
              </div>
              <div>
                <Input label="Last Name" {...register("lastName")} />
                <FormError
                  isVisible={!!errors.lastName}
                  message={errors?.lastName?.message ?? ""}
                />
              </div>
            </div>

            <Input label="Nickname" {...register("nickName")} />
            <div>
              <Input label="Password" {...register("password")} />{" "}
              <FormError
                isVisible={!!errors.password}
                message={errors?.password?.message ?? ""}
              />
            </div>
            <div>
              <Input
                label="Confirm Password"
                {...register("confirmPassword")}
              />{" "}
              <FormError
                isVisible={!!errors.confirmPassword}
                message={errors?.confirmPassword?.message ?? ""}
              />
            </div>

            <Button type='submit'>Submit</Button>
          </Card>
        </form>
      </div>
    </Section>
  );
};

export default BasicForm;
