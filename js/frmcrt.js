(function ($) {

    $.fn.frmcrt = function (options) {

        var defaultVal = {

            
        };
        
        var obj = $.extend(defaultVal, options);
        
        console.log(obj);
        var $thisform = this; 
        $.each(obj.inputs, function(key, val){
           switch (val.type){
               case "text":
                     $("#myForm").append("<li><label>"+val.label+"</label><input type='text' class='"+val.cls+"' /></li>");  
                     break;
               case "checkbox":
                   $("#myForm").append("<li><input type='checkbox' class='"+val.cls+"' /><label>"+val.label+"</label></li>");  
                   break;
               case "password":
                  $("#myForm").append("<li><label>"+val.label+"</label><input type='password' class='"+val.cls+"' /></li>");   
                  break;
                }
        })    
       
    }
})(jQuery);    