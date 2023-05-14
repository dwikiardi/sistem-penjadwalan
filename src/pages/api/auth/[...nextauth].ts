import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
          type: 'credentials',
          // name: 'Credentials',
          credentials: {
            // username: { label: "Email", type: "email", placeholder: "jsmith@test.com" },
            // password: { label: "Password", type: "password" }
          },
          authorize: (credentials, req) => {
            const {username, password} = credentials as {
              username : string;
              password : string;
            }
            // Add logic here to authorize the user
            // const user = { id: 1, name: "John Doe", email: "john.doe@example.com" };
            if (username === 'dwiki' && password === 'test') {
              return {
                id: '1',
                name: 'dwiki ardi',
                email: 'dwiki@test.com'
              };
            } else {
              throw new Error('Invalid Email / Password');
            }
          },
        }),
      ],
      pages: {
        signIn: '../../login',
      }
})