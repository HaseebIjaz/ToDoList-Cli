import figlet from "figlet";

//Sleep
export const sleep = async (ms = 2000) => {
    return new Promise((res)=> {
        setTimeout(() => {
            res(0);
        },ms)
    })
}

//Welcome
export const welcome = () => {
    const welcomeMsg = 'ToDo List Cli !';
    figlet(welcomeMsg,(err,msg) => {
        console.log(msg);
    })
}