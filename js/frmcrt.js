(function ($) {

    $.fn.frmcrt = function (options) {

        var defaultVal = {

            
        };
        
        var obj = $.extend(defaultVal, options);
        
       // console.log(obj);
        var $thisform = $(this);
       var addErr = function($id, $msg){
           $id.after("<label class='Err'>"+$msg+"</label>");
       } 
        //console.log(obj.inputs.length);
            
        var formElem = '';
        $.each(obj.inputs, function(key, val){
           switch (val.type){
               case "text":
                   formElem +=  "<li><label>"+val.label+"</label><input type='text' class='"+val.cls+"' id='"+key+"'/></li>";  
                     break;
               case "checkbox":
                   formElem += "<li><input type='checkbox' class='"+val.cls+"' /><label>"+val.label+"</label></li>";  
                   break;
               case "password":
                    formElem += "<li><label>"+val.label+"</label><input type='password' class='"+val.cls+"' /></li>";   
                  break;
                }
        }) 
       $thisform.append("<ul>"+formElem+"</ul>");
      
       $thisform.children().keyup(function(){
           $(".Err").html("");
           $.each(obj.inputs, function(ke, va){
               
                   $.each(va.rule, function(k, v){
                       switch(k){
                         case "minlength":
                         if($("#"+ke).val().length < v){
                             addErr($("#"+ke), "Enter "+v+" Characters");
                         }        
                         break;
                       }
                   });
              
           })
       });
       
       
    }
})(jQuery);    