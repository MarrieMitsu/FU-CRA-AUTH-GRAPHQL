interface AccessTokenProps {
    value: string | null | undefined;
    setAccessToken(val: string | null | undefined): void;
}

export const AccessToken: AccessTokenProps = {
    value: "",
    setAccessToken: function (val) {
        AccessToken.value = val;
    },
}