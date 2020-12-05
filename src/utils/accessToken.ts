interface accessTokenProps {
    value: string | null | undefined;
    setAccessToken(val: string | null | undefined): void;
}

export const accessToken: accessTokenProps = {
    value: "",
    setAccessToken: function (val) {
        accessToken.value = val;
    },
}