type OptinalArgs = {
  FNAME: string;
};

declare module "gatsby-plugin-mailchimp" {
  export default function addToMailChimp(
    email: string,
    optionalArgs: OptinalArgs
  ): Promise;
}
