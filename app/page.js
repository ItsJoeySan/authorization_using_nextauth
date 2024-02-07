import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import User from "./components/User";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <section>
      <div>Hello</div>
      <h1>Server Side Rendered</h1>
      <pre>{JSON.stringify(session)}</pre>
      <hr />
      <h1>Client Side rendered</h1>
      <User />
    </section>
  );
}
