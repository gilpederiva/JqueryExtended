(function( $, undefined ) {

    $.widget("ui.dropmenuEx", {
    
        options:{
            footer : '',
            textShadow: '',
            toggle: false,
            effect: 'blind',
            speedEffect : 300,
            toggleIn: function(){},
            toggleOut: function(){},
            themed: false
        },
        
        
        _create: function(){
            
            var self = this,
            options = self.options;
            
            //self.element.find("li:eq(0) a").focus();
            
            $(window).bind("keydown", function(event){
                console.log(event);
                
                if (event.keyCode == 77 && event.altKey == true){
                    //self.element.find("li:eq(0) a").focus().end().find("li:eq(0)").addClass("dropmenu-ex-active");
                    self.element.find("li:eq(0) a").focus().addClass("dropmenu-ex-active");
                }
            })
            
            self.element.addClass("ui-widget ui-corner-all");
                       
            var items = self.element.find("li ul");
            
            $.each(items, function(i, val){                                                             
                 items.eq(i).parent().find("a:eq(0)").append("<span></span>").end().addClass("haschild");
            });
            
            
            var itensPrimarios = self.element.children("li");
            
            $.each(itensPrimarios, function(i, val){                                                             
                 itensPrimarios.eq(i).addClass("primary");
            });            
            
                                   
            if (options.themed){                                              
                self.element.addClass("ui-state-default");                
            }
            
            
            
            self.element.find("li.primary > a").bind("focus", function(){                
                $(this).addClass("dropmenu-ex-active");       
                
                if ( $(this).closest("li").hasClass("haschild") ){
                    $(this).closest("li").find("ul").eq(0).show();
                }
                
            }).bind("blur", function(){                
                $(this).removeClass("dropmenu-ex-active");     
                
                if ( $(this).closest("li").hasClass("haschild") ){
                    $(this).closest("li").find("ul").eq(0).hide();
                }                
                
            });            
            
            
           
           
//           self.element.bind("blur", function(){  
//              self.element.find("li.dropmenu-ex-active").removeClass("dropmenu-ex-active"); 
//           });
            
            self.element.find("li a").bind("keydown", function(event){
                
                
                //seta para direita
                if (event.keyCode == 39)   {  
                    
                    //TODO o não esta detectando corretamente o último item primário
                    if (!self.element.find("li a:last").hasClass("dropmenu-ex-active")){
                          
                          //self.element.find("li a.dropmenu-ex-active ul:eq(0)").hide();
                       
                        self.element.find("li a.dropmenu-ex-active").removeClass("dropmenu-ex-active").closest("li").next("li").find("a:eq(0)").addClass("dropmenu-ex-active").focus();
                        
//                        if (self.element.find("li.dropmenu-ex-active").hasClass("haschild")){
//                            self.element.find("li.dropmenu-ex-active ul:eq(0)").show();
//                        }
   
                    }
                }
                
                //seta para esquerda              
                if (event.keyCode == 37){
                    
                    
                    
                    if (!self.element.find("li a:first").hasClass("dropmenu-ex-active")){
                          
                          //self.element.find("li a.dropmenu-ex-active ul:eq(0)").hide();
                       
                        self.element.find("li a.dropmenu-ex-active").removeClass("dropmenu-ex-active").closest("li").prev("li").find("a:eq(0)").addClass("dropmenu-ex-active").focus();
                        

   
                    }                    
                    
                    
//                    if (self.element.find("li:first").hasClass("dropmenu-ex-active") ){
//
//                    }else{                        
//                        self.element.find("li.dropmenu-ex-active ul:eq(0)").hide();
//                        self.element.find("li.dropmenu-ex-active").removeClass("dropmenu-ex-active").prev("li").addClass("dropmenu-ex-active").find("a").focus();
//
//                        if (self.element.find("li.dropmenu-ex-active").hasClass("haschild")){
//                            self.element.find("li.dropmenu-ex-active ul:eq(0)").show();
//                        }                            
//                    }
                    
                    
                    
                    
                }
                
                if (event.keyCode == 40){
                   if (self.element.find("li.dropmenu-ex-active").hasClass("haschild")){
                            self.element.find("li.dropmenu-ex-active ul:eq(0) li:eq(0) a").addClass("dropmenu-ex-subitem-active").focus();
                   }  
                }
                        
              
               
                
            })
           
            
                           
        }        
    });
})( jQuery );
