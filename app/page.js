import Link from "next/link";

export default function Home() {
  let name = "park";
  let link = "http://google.com";

  return (
    <div>
      <h4 style={{ color: "red", textAlign: "center", fontSize: "30px" }}>
        Tony Fresh
      </h4>
      <p className="title-sub">by dev {name}</p>
      <a href={link}>Link</a>
    </div>
  );
}
