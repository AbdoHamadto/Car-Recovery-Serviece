export default function InputText({ id, name, label, type, placeholder, value, onChange, error }) {
  return (
    <div className="w-full mb-6 flex flex-col">
      <label
        htmlFor={id}
        className="text-sm font-bold text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name} // خاصية name لربط الحقل مع Formik
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:border-primary sm:text-sm`}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
