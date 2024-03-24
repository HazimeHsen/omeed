import Card from "./Card";

export default function CardNumberInc() {
  const data = [
    {
      title: "Individuals coached",
      to: 10000,
    },
    {
      title: "Teams coached",
      to: 2000,
    },
    {
      title: "Businesses Transformed",
      to: 1000,
    },
  ];
  return (
    <div id="info" className="flex justify-center my-10">
      <div className="grid grid-cols-3 gap-2 ">
        {data.map((info, i) => (
          <Card data={info} key={i} />
        ))}
      </div>
    </div>
  );
}
