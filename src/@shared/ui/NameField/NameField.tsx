import { z } from "zod";
import { ZodFieldInfo, withForm } from "@shared";

export const clientNameSchema = z
  .string({
    required_error: "required",
    invalid_type_error: "not valid format",
  })
  .min(3, "name should have length more than 3")
  .max(10, "name should have length less than 11");

export const NameField = withForm({
  defaultValues: {
    name: "",
  },
  render: function Render({ form }) {
    return (
      <div>
        <form.AppField
          name="name"
          validators={{
            onBlur: clientNameSchema,
          }}
        >
          {(field) => (
            <>
              <field.TextField label="Ваше имя" />
              <ZodFieldInfo field={field} />
            </>
          )}
        </form.AppField>
      </div>
    );
  },
});
