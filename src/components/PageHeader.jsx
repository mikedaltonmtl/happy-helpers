export default function PageHeader(props) {
  return (
    <div className="flex justify-between m-4 text-lg text-teal-600 font-bold mb-2">
      <section>
        <h1 className="text-[1.5em]">Discover Tasks in {props.city}</h1>
      </section>
      <section className="flex">
        <p className="mx-3 hover:cursor-pointer" onClick={() => props.setView("List")}>LIST</p>
        <p>|</p>
        <p className="mx-3 hover:cursor-pointer" onClick={() => props.setView("Map")}>MAP</p>
      </section>
    </div>

  )
}