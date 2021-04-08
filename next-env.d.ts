declare module "*.css" {
    const styles: { [className: string]: string };
    export default styles;
}

interface Window {
    __GRPCWEB_DEVTOOLS__: any
    ethereum: any
}


declare namespace NodeJS {
    interface Process {
        browser: bool
    }
    interface Global {
        proto: any
    }
}
