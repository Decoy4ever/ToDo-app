export class LocalStorageConverter
{
    setTaskIntoLocalStorage(keyStr,value)
    {
        let stringifiedObj = JSON.stringify(value)
        console.log(stringifiedObj)
        localStorage.setItem(keyStr,stringifiedObj)
    }

    getTasksFromLocalStorage(value)
    {
        let keyStr = localStorage.getItem(value)
        return JSON.parse(keyStr)
    }
}

