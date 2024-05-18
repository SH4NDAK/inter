export default function Label({ obrigatorio, errors, children }) {
    return (
        <label
            className={`${errors ? 'text-danger' : ''} fs-6 fw-bold`}
        >
            {children}{obrigatorio && "*"}
        </label>
    )
}