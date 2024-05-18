import React from "react"
import { FormControl } from "react-bootstrap"
import Label from "./Label";

const FormTextarea = React.forwardRef(({ obrigatorio, label, errors, placeholder, ...props }, ref) => {
    return (
        <>
            <Label
                obrigatorio={obrigatorio}
                errors={errors}
            >
                {label}
            </Label>
            <FormControl
                as={"textarea"}
                rows={3}
                ref={ref}
                style={{ resize: "none" }}
                placeholder={placeholder}
                className={errors ? 'is-invalid' : ''}
                {...props}
            />
            {
                errors && (
                    <span className="text-danger">{errors.message}</span>
                )
            }
        </>

    )
});

export default FormTextarea