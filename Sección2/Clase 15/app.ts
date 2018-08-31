function activar(quien:string, //Parámetro obligatorio//
                 objeto:string="batiseñal",//Parámetro por defecto
                 momento?:string//Parámetro opcional
                ){
    let mensaje:string;

    if(momento){
        mensaje=`${quien} activó la ${objeto} en la ${momento}`;
    }else{
        mensaje=`${quien} activó la ${objeto}`;
    }
    
    console.log(mensaje);
}    

activar("Oscar","batiseñal","tarde");