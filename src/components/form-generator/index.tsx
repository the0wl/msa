import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts";

type FormGeneratorProps = {
  schema: any;
  onSubmit?: (formData: any) => Promise<void>;
  inputHandlers?: any;
};

const FormGenerator = ({
  schema,
  onSubmit,
  inputHandlers = {},
}: FormGeneratorProps) => {
  const [formData, setFormData] = useState({});
  const [dynamicOptions, setDynamicOptions] = useState({});

  const { data } = useContext(UserContext);

  useEffect(() => {
    const fetchSelectData = async () => {
      const options = {};
      for (const field of schema.fields) {
        if (field.type === "select" && field.dataSource) {
          try {
            const response = await fetch(field.dataSource, {
              headers: { Authorization: "Bearer " + data?.token },
            });

            const responseJson = await response.json();
            options[field.name] = responseJson.map((item) => ({
              value: item[field.valueKey || "value"],
              label: item[field.labelKey || "label"],
            }));
          } catch (error) {
            console.error(`Error loading options for ${field.name}:`, error);
            options[field.name] = [];
          }
        }
      }
      setDynamicOptions(options);
    };

    fetchSelectData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (typeof onSubmit === "function") {
      await onSubmit(formData);

      console.debug("Form data:", formData);
    } else if (schema.submit?.url) {
      try {
        const response = await fetch(schema.submit.url, {
          method: schema.submit.method || "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const responseJson = await response.json();

        console.debug("Form data:", responseJson);
      } catch (error) {
        console.error("Submit error:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let finalValue = type === "checkbox" ? checked : value;

    // Busca a configuração do campo
    const field = schema.fields.find((f) => f.name === name);

    // Aplica handler personalizado se existir
    if (field?.onChange && inputHandlers[field.onChange]) {
      finalValue = inputHandlers[field.onChange](finalValue, formData);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));
  };

  const renderField = (field) => {
    const commonProps = {
      name: field.name,
      value: formData[field.name] || "",
      onChange: handleChange,
      onFocus: field.onFocus ? inputHandlers[field.onFocus] : undefined,
      onBlur: field.onBlur ? inputHandlers[field.onBlur] : undefined,
      className: "w-full p-2 mt-1 border border-gray-300 rounded",
    };

    switch (field.type) {
      case "text":
      case "email":
      case "password":
        return (
          <div className="mb-4" key={field.name}>
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              onFocus={field.onFocus ? inputHandlers[field.onFocus] : undefined}
              onBlur={field.onBlur ? inputHandlers[field.onBlur] : undefined}
              placeholder={field.placeholder}
              required={field.isRequired}
              readOnly={field.readOnly}
              className="mt-1 w-full rounded border border-gray-300 bg-white p-2"
            />
          </div>
        );

      case "select":
        return (
          <div className="mb-4" key={field.name}>
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            <select {...commonProps}>
              {dynamicOptions[field.name]?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl p-5">
      {schema.fields.map(renderField)}
      <button
        type="submit"
        className={
          schema.submit?.buttonClass ||
          "cursor-pointer rounded border-none bg-green-600 px-4 py-2 text-white hover:bg-green-500"
        }
      >
        {schema.submit?.buttonText || "Enviar"}
      </button>
    </form>
  );
};

export default FormGenerator;
