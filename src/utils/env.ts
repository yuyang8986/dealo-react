interface B2cConfig{
    clientId: string;
    authority: string;
    knownAuthorities?: string[];
    redirectUri?: string;
}

interface IEnv {
    b2c: {
        config: B2cConfig;
        redirectRequestScopes: string[];
        passwordAuthority: string;
    }
}

declare global {
    interface Window {
        _env_: IEnv;
    }
}

export default window._env_;
