 //  Obtener datos de entidad de CRM (Nota: esto solo funciona dentro de Zoho CRM)
 ZOHO.embeddedApp.on("PageLoad", entity => {
    //Esta es la información sobre el registro actual, si corresponde.
    console.log(entity);
    console.log("ENTITY");
});

// Inicializar la conexión del widget
ZOHO.embeddedApp.init();

ZOHO.CRM.CONFIG.getCurrentUser().then(function(data){
    console.log("DENTRO GET USER");
    console.log("data ",data);
    localStorage.setItem("Usuario", JSON.stringify(data));
}).catch(function(error){
    console.log("ERORRRRR ",error);
});



