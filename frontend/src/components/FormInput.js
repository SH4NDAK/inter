import { FormControl } from "react-bootstrap";
import Label from "./Label";
import React from "react";

const FormInput = React.forwardRef(({ obrigatorio, label, type, placeholder, errors, register, ...props }, ref) => {
    return (
        <>
            <Label
                obrigatorio={obrigatorio}
                errors={errors}

            >
                {label}
            </Label>
            <FormControl
                ref={ref}
                type={type}
                placeholder={placeholder}
                className={errors ? 'is-invalid' : ''}
                {...register}
                {...props}
            />
            {
                errors && (
                    <span className="text-danger">{errors.message}</span>
                )
            }
        </>
    )
})

export default FormInput;