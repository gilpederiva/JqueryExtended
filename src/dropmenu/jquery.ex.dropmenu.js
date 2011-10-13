(function( $, undefined ) {

    $.widget("ex.dropmenuEx", {

        options:{         
            effectSpeed: 100
        },

        _create: function(){
            
            
            
            /**
             * 
             * TODO adicionar os stopPropagation
             */
            
            
            var self = this,
            options = self.options;
            
            
            self.listItems = self.element.find("li");
            
            self.ancoras = self.listItems.find("> a");
                      
            self.primaryItens = self.element.children("li");
                        

            $(window).bind("keydown", function(event){     
                console.log( $.ui.keyCode );
                if (event.keyCode == 77 && event.altKey == true){
                    self.listItems.removeClass("ex-dropmenu-active ex-dropmenu-open");
                        
                    self.listItems.eq(0).addClass("ex-dropmenu-active").find("> a").focus();
                }
            })
                        
            //adiciona as classes ao elemento <ul> pai
            self.element.addClass("ex-dropmenu ui-widget ui-corner-all ui-state-default");
            
            //busca os elementos <li> que possuem filhos <ul> adicionando o elemento <span>
            var items = self.listItems.find("> ul");

            $.each(items, function(i, val){                                                             
                items.eq(i).parent().find("a:eq(0)").append("<span></span>").end().addClass("haschild");
            });


            //busca os elementos <li> primários adicionando a classe primary
            $.each( self.primaryItens , function(i, val){                                                             
                self.primaryItens.eq(i).addClass("primary");
            });            
            
            
            self.element.bind("mouseleave", function(){
               
               self.ancoras.filter(":focus").closest("li").removeClass("ex-dropmenu-active ex-dropmenu-open ex-dropmenu-subitem-active");
               self.element.siblings("input").eq(0).focus();
               
            }).bind("mouseenter", function(){
                
               self.ancoras.filter(":focus").closest("li").removeClass("ex-dropmenu-active ex-dropmenu-open ex-dropmenu-subitem-active");
               self.element.siblings("input").eq(0).focus();
                
            });
            
            
            
            
/*
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
                
                

            }).bind("blur", function(event){  
                    
              
                    
                var elementoLI = $(this).closest("li");

                console.log( elementoLI.find("li.ex-dropmenu-subitem-active")  );
                
                //o elemento <li> é primário porém não tem filhos, o foco certamente seguirá para o <li> irmão                
                if ( elementoLI.hasClass( "primary" ) && !elementoLI.hasClass( "haschild" ) ){
                    elementoLI.removeClass("ex-dropmenu-active ex-dropmenu-open");  
                }
                
                                
                //o elemento que esta perdendo o foco é <li> com classe primary
                if ( elementoLI.hasClass( "primary" ) && elementoLI.hasClass( "haschild" ) ){

                    //não existe elemento filho <li> ativo
                    //TODO - tentar substituir por next e tentar usar o :focus
                    if ( elementoLI.find("li.ex-dropmenu-subitem-active").length == 0  ){                    
                        elementoLI.removeClass("ex-dropmenu-active ex-dropmenu-open");  
                    } 

                }
                else{       
                    
                  
                        //o elemento que esta perdendo o foco é <li> sem classe primária
                        elementoLI.removeClass("ex-dropmenu-subitem-active");       
                  
                }
                
                
//                if ( !elementoLI.hasClass( "primary" ) && !elementoLI.hasClass( "haschild" ) ){                
//                    elementoLI.removeClass("ex-dropmenu-subitem-active");       
//                }



                if (!elementoLI.hasClass("primary") &&  elementoLI.hasClass("haschild") && !elementoLI.find("li.ex-dropmenu-subitem-active").is("li") ){                    
                    elementoLI.find("ul").eq(0).slideUp(options.effectSpeed);                    
                    elementoLI.find("span").eq(0).removeClass("ex-dropmenu-icon-arrow-hover");
                    
                }  
                                                                
                if ( !elementoLI.closest("ul li.primary").find("li").hasClass("ex-dropmenu-subitem-active")){
                    
                    elementoLI.closest("ul li.primary").find("ul").slideUp(options.effectSpeed).end().find("li.ex-dropmenu-active").removeClass("ex-dropmenu-active ex-dropmenu-open");
                    
                    
                }
                
            });
            
     */     
            
            
            //funcionalidade de hover para o menu
            self.listItems.hover(function(event){
                                                             
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
                
               event.stopPropagation();           
                
                
            }, function(event){
                              
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
            self.ancoras.bind( "keydown.dropmenu", self._keydown );

        },


        _keydown: function( event ){

            var keyCode = $.ui.keyCode;
            var elemParent = null;
            var options = this.options;

                        
            switch( event.keyCode ){

                case keyCode.RIGHT:
             
                    elemParent = $(this).closest("li");
                    
                    //if (elemParent.is(":last-child")) break;
             
                    if ( elemParent.hasClass("primary") ){
                        
                        elemParent.removeClass("ex-dropmenu-active ex-dropmenu-open")
                                  .next("li")
                                  .addClass("ex-dropmenu-active ex-dropmenu-open")
                                  .find("a").eq(0).focus();                                  
                                  console.log( elemParent )
                                  
                        if (elemParent.next("li").hasClass("haschild")){
                            elemParent.next("li").find("ul").eq(0).slideDown(200);
                        }          
                        
                       if (elemParent.hasClass("haschild")){
                            elemParent.find("ul").eq(0).slideUp(200);
                        } 
                                  
                        
                    }else{

                        //não é um elemento primário porém tem filhos
                        if ( elemParent.hasClass("haschild") ){
                            
                            elemParent.removeClass("ex-dropmenu-subitem-active")                                      
                                      .find("ul li").eq(0).addClass("ex-dropmenu-subitem-active")
                                      .find("a").eq(0)
                                      .focus();

                        }                       
                    }                                        
                
                    break;
             
                case keyCode.LEFT:
                 
                    elemParent = $(this).closest("li");
                 
                    
                    //if (elemParent.is(":first-child")) break;
                    
                 
                    if ( elemParent.hasClass("primary") ){
                        
                        elemParent.removeClass("ex-dropmenu-active ex-dropmenu-open")
                                  .prev("li")
                                  .addClass("ex-dropmenu-active ex-dropmenu-open")
                                  .find("a").eq(0).focus()
                                  .end();
                                  
                        if (elemParent.hasClass("haschild")){
                            elemParent.find("ul").eq(0).slideUp(200);
                            console.log("aqui");
                        }                                            
                                  
                    }else{

                        if ( elemParent.closest("ul").closest("li").hasClass("haschild") && !elemParent.closest("ul").closest("li").hasClass("primary")  ){
                            elemParent.removeClass("ex-dropmenu-subitem-active")
                                      .closest("ul")
                                      .closest("li")
                                      .addClass("ex-dropmenu-subitem-active")
                                      .find("a:eq(0)").focus();                        
                            
                        }                        
                    }                 
                 
                    break;
                    
             
                case keyCode.UP:
                    
                    var elemUp = $(this).closest("li");
                    
                    elemUp.removeClass("ex-dropmenu-subitem-active");
                    
                    if ( elemUp.hasClass("haschild") ){
                        elemUp.find("ul").eq(0).slideUp(200);
                    }
                    
                    
                    if (elemUp.prev().is("li")){
                        
                        elemUp.prev("li").addClass("ex-dropmenu-subitem-active")
                              .find("a").eq(0).focus();
                     
                        if (elemUp.prev("li").hasClass("haschild")){
                            elemUp.prev("li").find("ul").eq(0).slideDown(200)
                        }      
                     
                    }else{
                          elemUp.closest("ul").closest("li").find("a:eq(0)").focus();
                    }
                    
                    
                    
                    break;
             
             
                case keyCode.DOWN:
             
                    elemParent = $(this).closest("li"); 


                    
                    if (elemParent.hasClass("primary")){
                        
                        if (elemParent.hasClass("haschild")){
                            
                            elemParent.find("ul").eq(0)                                      
                                      .find("li").eq(0)
                                      .addClass("ex-dropmenu-subitem-active")
                                      .find("a").eq(0).focus();
                        }
                        
                        
                    }else{
                        
                        
                        if ( elemParent.is(":last-child")) break;
                        
                        
                        elemParent.removeClass("ex-dropmenu-subitem-active")
                                  .next().addClass("ex-dropmenu-subitem-active")
                                  .find("a")
                                  .focus();
                       
                        if ( elemParent.next().hasClass("haschild") ){
                            elemParent.next().find("ul").eq(0).slideDown(200);
                            
                            
                        }
                        
                        
                    }
                    
                    
                    break;
            }//end switch


        }


    });


})( jQuery );
