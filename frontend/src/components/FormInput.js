import { FormControl, InputGroup } from "react-bootstrap";
import Label from "./Label";
import React from "react";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

const FormInput = React.forwardRef(({ obrigatorio, label, type, placeholder, errors, monetario, unidadeMedida, ...props }, ref) => {
    return (
        <>
            <Label
                obrigatorio={obrigatorio}
                errors={errors}

            >
                {label}
            </Label>
            <div>
                <InputGroup>
                    {
                        monetario && (
                            <InputGroupText className={errors ? 'border-danger' : ''}>R$</InputGroupText>
                        )
                    }
                    <FormControl
                        ref={ref}
                        type={type}
                        placeholder={placeholder}
                        className={errors ? 'is-invalid' : ''}
                        {...props}
                    />
                    {
                        !!unidadeMedida && (
                            <InputGroupText className={errors ? 'border-danger' : ''}>{unidadeMedida}</InputGroupText>
                        )
                    }
                </InputGroup>
            </div>

            {
                errors && (
                    <span className="text-danger">{errors.message}</span>
                )
            }
        </>
    )
})

export default FormInput;