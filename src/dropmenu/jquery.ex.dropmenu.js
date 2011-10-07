(function( $, undefined ) {

    $.widget("ex.dropmenuEx", {

        options:{         
            effectSpeed: 100
        },

        _create: function(){

            var self = this,
            options = self.options;
            
            
            self.listItems = self.element.find("li");
            
            self.ancoras = self.listItems.find("> a");
                        

            $(window).bind("keydown", function(event){                      
                if (event.keyCode == 77 && event.altKey == true){
                    self.listItems.removeClass("ex-dropmenu-active ex-dropmenu-active ex-dropmenu-open");
                        
                    self.listItems.eq(0).addClass("ex-dropmenu-active").find("> a").focus();
                }
            })
                        
            //adiciona as classes ao elemento <ul> pai
            self.element.addClass("ex-dropmenu ui-widget ui-corner-all ui-state-default");
            
            //busca os elementos <li> que possuem filhos <ul> adicionando o elemento <span>
//            var items = self.element.find("li ul");
//
//            $.each(items, function(i, val){                                                             
//                items.eq(i).parent().find("a:eq(0)").append("<span></span>").end().addClass("haschild");
//            });

            var items = self.listItems.find("> ul");

            $.each(items, function(i, val){                                                             
                items.eq(i).parent().find("a:eq(0)").append("<span></span>").end().addClass("haschild");
            });



            
            
            
            //busca os elementos <li> primários adicionando a classe primary
            var itensPrimarios = self.element.children("li");

            $.each(itensPrimarios, function(i, val){                                                             
                itensPrimarios.eq(i).addClass("primary");
            });            
            

            //define as funcionalidades quando o elemento recebe o foco
            self.ancoras.bind("focus", function(){ 

                var elementoLI = $(this).closest("li");

                if ( elementoLI.hasClass("primary") ){
                    elementoLI.addClass("ex-dropmenu-active ex-dropmenu-open");       
                }else{
                    elementoLI.addClass("ex-dropmenu-subitem-active");       
                }

                if ( elementoLI.hasClass("haschild") ){
                    elementoLI.find("ul").eq(0).slideDown(options.effectSpeed);
                    elementoLI.find("span").eq(0).addClass("ex-dropmenu-icon-arrow-hover");
                }

            }).bind("blur", function(){  

                var elementoLI = $(this).closest("li");

                if ( elementoLI.hasClass("primary") ){

                    if ( !elementoLI.find("li.ex-dropmenu-subitem-active").is("li")  )                    
                        elementoLI.removeClass("ex-dropmenu-active ex-dropmenu-open");   


                }else{
                    elementoLI.removeClass("ex-dropmenu-subitem-active");       
                }

                if ( elementoLI.hasClass("haschild") && !elementoLI.find("li.ex-dropmenu-subitem-active").is("li") ){                    
                    elementoLI.find("ul").eq(0).slideUp(options.effectSpeed);
                    elementoLI.find("span").eq(0).removeClass("ex-dropmenu-icon-arrow-hover");
                }  
                                                                
                if ( !elementoLI.closest("ul li.primary").find("li").hasClass("ex-dropmenu-subitem-active")){
                    
                    elementoLI.closest("ul li.primary").find("ul").slideUp(options.effectSpeed).end().find("li.ex-dropmenu-active").removeClass("ex-dropmenu-active ex-dropmenu-open");
                    
                    
                }
                
            });
            
          
            
            
            //funcionalidade de hover para o menu
            self.element.find("li").hover(function(){
                                                             
                var elemento = $(this);
                                                
                if (elemento.hasClass("haschild")){                    
                    elemento.find("ul").eq(0).slideDown(options.effectSpeed);
                    elemento.find("a > span").eq(0).addClass("ex-dropmenu-icon-arrow-hover");
                }
                
                if (elemento.hasClass("primary")){
                    elemento.addClass("ex-dropmenu-active")
                }else{
                    elemento.addClass("ex-dropmenu-subitem-active");
                }
                
                
            }, function(){
                              
                var elemento = $(this);
                                                
                if (elemento.hasClass("haschild")){
                    elemento.find("ul").eq(0).slideUp(options.effectSpeed);
                    elemento.find("a > span").eq(0).removeClass("ex-dropmenu-icon-arrow-hover");
                }
                
                if (elemento.hasClass("primary")){
                    elemento.removeClass("ex-dropmenu-active")
                }else{
                    elemento.removeClass("ex-dropmenu-subitem-active");
                }                
                               
            });  
            
                              
            //adiciona as funcionalidades de navegação pelas teclas: esquerda, direita, cima e baixo
            //self.element.find( "li a" ).bind( "keydown.dropmenu", self.keydown );
            self.ancoras.bind( "keydown.dropmenu", self.keydown );

        },


        keydown: function( event ){

            var keyCode = $.ui.keyCode;
            var elemParent = null;
                        
            switch( event.keyCode ){

                case keyCode.RIGHT:
             
                    elemParent = $(this).closest("li");
             
                    if ( elemParent.hasClass("primary") ){
                        elemParent.next("li").find("a").eq(0).focus();
                    }else{

                        if ( elemParent.hasClass("haschild") ){
                            elemParent.find("ul:eq(0)").find("li:eq(0) a:eq(0)").focus();                                                        
                        }                       
                    }                                        
                
                    break;
             
                case keyCode.LEFT:
                 
                    elemParent = $(this).closest("li");
                 
                    if ( elemParent.hasClass("primary") ){
                        elemParent.prev("li").find("a").eq(0).focus();
                    }else{

                        if ( elemParent.closest("ul").closest("li").hasClass("haschild") && $(this).closest("li").is(":first")  ){
                            elemParent.closest("ul").closest("li").find("a:eq(0)").focus();                        
                        }                        
                    }                 
                 
                    break;
                    
             
                case keyCode.UP:
                    
                    var elemUp = $(this).closest("li");

                    if ( !elemUp.prev().is("li") ){                          
                        elemUp.closest("ul").closest("li").find("a:eq(0)").focus();
                    }else{                                                    
                        $(this).closest("li").prev("li").find("a:eq(0)").focus(); 
                    }      
                    
                    break;
             
             
                case keyCode.DOWN:
             
                    elemParent = $(this).next();

                    if ( elemParent.is("ul") && elemParent.closest("li").hasClass("primary")  ){
                        elemParent.find("li:eq(0) a:eq(0)").focus();
                    }else{                                                    
                        $(this).closest("li").next("li").find("a:eq(0)").focus(); 
                    }
                    
                    break;
            }//end switch


        }


    });


})( jQuery );
