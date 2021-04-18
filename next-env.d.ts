declare module "*.css" {
    const styles: { [className: string]: string };
    export default styles;
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
