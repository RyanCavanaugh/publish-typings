export declare enum Secret {
    /**
     * Used to upload blobs.
     * To find (or refresh) this value, go to https://ms.portal.azure.com -> All resources -> typespublisher -> General -> Access keys
     */
    AZURE_STORAGE_ACCESS_KEY = 0,
    /**
     * Lets the server update an issue (https://github.com/Microsoft/types-publisher/issues/40) on GitHub in case of an error.
     * Create a token at: https://github.com/settings/tokens
     */
    GITHUB_ACCESS_TOKEN = 1,
    /**
     * This is used to ensure that only GitHub can send messages to our server.
     * This should match the secret value set on GitHub: https://github.com/DefinitelyTyped/DefinitelyTyped/settings/hooks
     * The Payload URL should be the URL of the Azure service.
     * The webhook ignores the `sourceRepository` setting and can be triggered by *anything* with the secret,
     * so make sure only DefinitelyTyped has the secret.
     */
    GITHUB_SECRET = 2,
    /**
     * Token used to perform request to NPM's API.
     * This was generated by doing:
     * - `npm login`
     * - copy the token value (comes after `authToken=`) in `~/.npmrc`
     * - `rm ~/.npmrc` (don't want to accidentally log out this token.)
     *
     * We only need one token in existence, so delete old tokens at: https://www.npmjs.com/settings/tokens
     */
    NPM_TOKEN = 3
}
export declare const allSecrets: Secret[];
export declare function getSecret(secret: Secret): Promise<string>;
