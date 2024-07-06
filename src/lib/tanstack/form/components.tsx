import { FieldApi } from "@tanstack/react-form";


export function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {

  return (
    <>
      {field.state.meta.touchedErrors ? (
        <em className="text-error-content text-xs">{field.state.meta.touchedErrors}</em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}

export interface FormFieldProps<T> {
  field: FieldApi<T, any, any>;
  fieldKey: string extends keyof T ? string : Extract<keyof T, string>;
  fieldlabel?:string;
  className?: string;
}
