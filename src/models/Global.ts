type CallbackFunction = (...args: any[]) => void;

interface ProcessEnv {
    [key: string]: string | undefined;
}

export { CallbackFunction, ProcessEnv };
