export default function Faq({ data }) {
  return (
    <>
      {data.map((item) => (
        <div>
          <h4>{item.question}</h4>
          <p>{item.answer}</p>
        </div>
      ))}
    </>
  );
}
