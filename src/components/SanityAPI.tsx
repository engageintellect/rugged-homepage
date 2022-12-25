import { createClient } from "next-sanity";

export default function SanityAPI() {
  const client = createClient({
    projectId: `${process.env.SANITY_PROJECT_ID}`,
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
  });

  const handler = async () => {
    const pets = await client.fetch(`*[_type == "pet"]`);
    const pics = await client.fetch(`*[_type == "photo"]`);

    console.log(pets);
    console.log(pics);
  };

  handler();

  return <div>hello world</div>;
}
