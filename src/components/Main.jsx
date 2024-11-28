import Card from "./Card";

export default function Main() {
  return (
    <>
      <main>
        <div className="container py-4">
          <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            <Card></Card>
          </div>
        </div>
      </main>
    </>
  );
}
