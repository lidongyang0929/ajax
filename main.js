button.addEventListener('click',()=>{
    let request = new XMLHttpRequest()
    request.open('get','xxx')
    request.send()
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                let object = window.JSON.parse(request.responseText)
                console.log(object.note)
            }
        }else if(request.status >= 400){
            console.log('请求失败')
        }
    }
})