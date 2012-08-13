<form id="myForm">
    
    
</form>
<script type="application/javascript" src="js/jquery.js"></script>
<script type="application/javascript" src="js/frmcrt.js"></script>
<script>
    $(function(){
        $(".myForm").frmcrt({
     inputs:{
         
            name:{
                name:"name",
                type:"text",
                label:"Name",
                cls:"longInput"
            },
            check:{
                name:"interest[]",
                type:"checkbox",
                label:"Play",
                cls:"myCheck"
            
           },
           check1:{
                name:"interest[]",
                type:"checkbox",
                label:"Study",
                cls:"myCheck"
            
           },
           password:{
                name:"interest[]",
                type:"password",
                label:"Password",
                cls:"pwd"
            
           }
       }   
    });
    });
    
</script>