export class LocalStorageConverter
{
    setTaskIntoLocalStorage(keyStr,value)
    {
        let stringifiedObj = JSON.stringify(value)
        console.log(keyStr)
        console.log(value)
        console.log(stringifiedObj)
        localStorage.setItem(keyStr,stringifiedObj)
    }

    getTasksFromLocalStorage(value)
    {
        let keyStr = localStorage.getItem(value)
        console.log(value)
        return JSON.parse(keyStr)
    }
}

