
for(var i = 0; i < 10; i++){
    ( setTimeout (function (){
    }, 1000));
    console.log(i);
}
console.log('============================with async (этого мы еще не знаем)==========================')
async function fu (){
    for(var i = 0; i < 10; i++){
        await ( setTimeout (function (){

        }, 1000));
        console.log(i);
    }
}
fu();