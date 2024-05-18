import React from "react"
import Label from "./Label"
import { SelectPicker } from "rsuite"

const FormSelectpicker = React.forwardRef(({ obrigatorio, label, data, placeholder, searchable, modal, container, value, errors, ...props }, ref) => {
    return (
        <>
            <Label
                obrigatorio={obrigatorio}
                errors={errors}
            >
                {label}
            </Label>

            <SelectPicker
                ref={ref}
                data={data}
                placeholder={placeholder}
                searchable={!searchable ? true : searchable}
                menuStyle={modal ? { zIndex: "2000" } : ''}
                container={modal ? container.current : ''}
                value={value}
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

export default FormSelectpicker