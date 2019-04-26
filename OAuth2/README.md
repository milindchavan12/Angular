# Angular App Security
OpenID Connect and OAuth2 are the most modern and standardized approaches for authenticating users and authorizing their access to your apps and data. These protocols let users of your app participate in a single sign-on experience across one or more applications in the federated ecosystem of applications.

### Security Design Considerations:
- Authentication : Who is the user!
- Authorization : What user can access (permission)
- Transport Protection
- Cross Origin Resource Sharing (CORS)
- Cross Site Request Forgery (CSRF)
- Cross Site Scripting (XSS)

## Angular App Security Architecture
![img text](https://github.com/milindchavan12/Angular/blob/master/Assets/AngularAppSecurityArchitecture.png)

### OAuth 2 Roles:
- Resource Owner : An End User.
- Resource Server : A Website/ API or Remotely Access Data Store.
- Client : A Client App itself.
- Authorization Server : STS/ Identity Provider (IDP)
