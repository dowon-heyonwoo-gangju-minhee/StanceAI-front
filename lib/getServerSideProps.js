import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

// export default function PostPage({ session }) {
//   return (
//     <div>
//       <h1>POST 페이지에 오신 것을 환영합니다</h1>
//     </div>
//   );
// }
