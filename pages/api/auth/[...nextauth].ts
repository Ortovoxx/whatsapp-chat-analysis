import NextAuth from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        AzureADProvider({
            clientId: String(process.env.AZURE_AD_CLIENT_ID),
            clientSecret: String(process.env.AZURE_AD_CLIENT_SECRET),
            tenantId: process.env.AZURE_AD_TENANT_ID,
        }),
    ],
})