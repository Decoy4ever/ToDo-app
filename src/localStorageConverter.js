export class LocalStorageConverter
{
    setTaskIntoLocalStorage(keyStr,value)
    {
       let stringifiedTaskArr = JSON.stringify(value)
       console.log(keyStr)
       console.log(stringifiedTaskArr)
       localStorage.setItem(keyStr,stringifiedTaskArr)
    }
}

