function fetchData(callback){
    

setTimeout(() => {
    console.log('Data Fetched');
    callback()
},2000)

}

function callBackFunction(){
    console.log('Data Received');
}

fetchData(callBackFunction);