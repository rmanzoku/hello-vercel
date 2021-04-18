declare module "*.css" {
    const styles: { [className: string]: string };
    export default styles;
}

interface metamaskEthereum {
    send: (method: string) => Promise<Array<string>>
    selectedAddress: string
}

interface Window {
    __GRPCWEB_DEVTOOLS__: any
    ethereum: metamaskEthereum | undefined
}


declare namespace NodeJS {
    interface Process {
        browser: bool
        client: bool
    }
    interface Global {
        proto: any
    }
}
