export class LocalStorageConverter
{
    setTaskIntoLocalStorage(key,value)
    {
       let stringifiedTaskArr = JSON.stringify(value)
       console.log(key)
       console.log(stringifiedTaskArr)
       localStorage.setItem(key,stringifiedTaskArr)
    }
}

