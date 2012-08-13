<form id="naren">
<!--    <div>   
    <label>Username</label><input type="text" name="name"/>
    </div>
    <div>   
    <label>Password</label><input type="password" name="password"/>
    </div>
    <div>   
    <label>Confirm Password</label><input type="password" name="cpassword"/>
    </div>
    <div>
        <h2>Hobbies</h2>
    </div>
     <div>   
    <input type="checkbox" name="hobbies[]"/><label>Writing</label>
    </div>
    <div>   
    <input type="checkbox" name="hobbies[]"/><label>Reading</label>
    </div>
    <div>
        <h2>Gender</h2>
    </div>
    <div>   
    <input type="radio" name="gender"/><label>Male</label>
    </div>
    <div>   
    <input type="radio" name="gender"/><label>Female</label>
    </div>
    <div>   
    <input type="submit" name="submit"/>
    </div>-->
    
</form>
<script type="application/javascript" src="js/jquery.js"></script>
<script type="application/javascript" src="js/validator.js"></script>
<script>
   
    
    $(function(){
        
         var formobj = {
             name:{
                 "name":"name",
                 
                 "rule":"required"
             },
             text1:{
                 "name":"password",
                 "rule":{
                     'required':true,
                     'minlength':6
                 }
             }
             
             
         };
        $.each(formobj,function(key, val){
     console.log(key, val);
        });
    });
    
</script>