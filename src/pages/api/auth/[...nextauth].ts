import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: "Email", type: "email", placeholder: "jsmith@test.com" },
            password: { label: "Password", type: "password" }
          },
          authorize: (credentials) => {
            // Add logic here to authorize the user
            // const user = { id: 1, name: "John Doe", email: "john.doe@example.com" };
            if (credentials.username === 'dwiki' && credentials.password === 'test') {
              return {
                id: '1',
                name: 'dwiki ardi',
                email: 'dwiki@test.com'
              };
            } else {
              return null;
            }
          },
        }),
      ],
      pages: {
        signIn: '../../login',
      }
})