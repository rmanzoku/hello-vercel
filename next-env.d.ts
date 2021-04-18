declare module "*.css" {
    const styles: { [className: string]: string };
    export default styles;
}

interface metamaskEthereum {
    request: (method: string, params?: any) => Promise<unknown>
    send: (method: string) => Promise<unknown>
    selectedAddress: string
}

interface Window {
    __GRPCWEB_DEVTOOLS__: any
    ethereum: metamaskEthereum | undefined
    web3: any | undefined
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
