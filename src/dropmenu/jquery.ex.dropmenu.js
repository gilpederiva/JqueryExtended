(function( $, undefined ) {

    $.widget("ex.dropmenuEx", {

        options:{         
            effectSpeed: 200
        },

        _create: function(){
            
            
            
            /**
             * 
             * TODO adicionar os stopPropagation
             */
            
            
            var self = this,
            options = self.options;
            
            self.mouseOver = false;
            self.keyboardMenu = false;
           
            
            
            self.listItems = self.element.find("li");
            
            self.ancoras = self.listItems.find("> a");
                      
            self.primaryItens = self.element.children("li");
                        

            $(window).bind("keydown", function(event){     
                var keyCode = $.ui.keyCode;
                //console.log( $.ui.keyCode );
                if (event.keyCode == 77 && event.altKey == true){
                    self.listItems.removeClass("ex-dropmenu-active ex-dropmenu-open");                        
                    self.listItems.eq(0).addClass("ex-dropmenu-active").find("> a").focus();
                    self.keyboardMenu = true;
                }
                
                
                
                
            }).bind("click", function(){
                
                if (!self.mouseOver && self.keyboardMenu == true){
                    self.listItems.removeClass("ex-dropmenu-active ex-dropmenu-open ex-dropmenu-subitem-active");
                    self.ancoras.closest("li.haschild").find("ul").slideUp(200);               
                    self.ancoras.trigger("blur");
                    self.keyboardMenu = false;                    
                }
               
            });
                        
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
                              
                self.ancoras.closest("li").removeClass("ex-dropmenu-active ex-dropmenu-open ex-dropmenu-subitem-active");
                self.ancoras.closest("li.haschild").find("ul").slideUp(200);               
                self.ancoras.filter(":focus").trigger("blur");
                self.mouseOver = false;               
               
            }).bind("mouseenter", function(){
               
                self.ancoras.filter(":focus").closest("li").removeClass("ex-dropmenu-active ex-dropmenu-open ex-dropmenu-subitem-active");
                self.ancoras.closest("li.haschild").find("ul").slideUp(200);               
                self.ancoras.filter(":focus").trigger("blur");
                self.mouseOver  = true; 
                
            });
            
            
            
            
            
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
            self.ancoras.bind( "keydown.dropmenu", {options: self.options},self._keydown );

        },


        _keydown: function( event ){

            var keyCode = $.ui.keyCode;
            var elemParent = null;
            var options = event.data;

                        
            switch( event.keyCode ){
                
                             
                case keyCode.RIGHT:
             
                    elemParent = $(this).closest("li");
                    
                    
             
                    if ( elemParent.hasClass("primary") ){
                        
                        if ( elemParent.is( ":last-child" ) ) break;
                        
                        elemParent.removeClass("ex-dropmenu-active ex-dropmenu-open")
                        .next("li")
                        .addClass("ex-dropmenu-active ex-dropmenu-open")
                        .find("a").eq(0).focus(); 
                                  
                        if (elemParent.next("li").hasClass("haschild")){
                            elemParent.next("li").find("ul").eq(0).slideDown( options.effectSpeed );
                        }          
                        
                        if (elemParent.hasClass("haschild")){
                            elemParent.find("ul").eq(0).slideUp( options.effectSpeed );
                        } 
                                  
                        
                    }else{

                        //não é um elemento primário porém tem filhos
                        if ( elemParent.hasClass("haschild") ){
                            
                            var submenu = elemParent                            
                            .find("ul").eq(0)
                            .find("li").eq(0);
                            
                            elemParent.removeClass("ex-dropmenu-subitem-active")                                      
                            .find("ul").eq(0)
                            .find("li").eq(0).addClass("ex-dropmenu-subitem-active")
                            .find("a").eq(0)
                            .focus();
                                      
                            if (submenu.hasClass("haschild")){
                                submenu.find("ul").eq(0).slideDown( options.effectSpeed );
                                submenu.find("a:eq(0) span:eq(0)").addClass("ex-dropmenu-icon-arrow-hover");
                            }          

                        }                       
                    }                                        
                
                    break;
             
                case keyCode.LEFT:
                 
                    elemParent = $(this).closest("li");
                 
                
                    
                 
                    if ( elemParent.hasClass("primary") ){
                        
                        //se for elemento primário e o primeiro <li>
                        if ( elemParent.is( ":first-child" ) ) break;                        
                        
                        elemParent.removeClass("ex-dropmenu-active ex-dropmenu-open")
                        .prev("li")
                        .addClass("ex-dropmenu-active ex-dropmenu-open")
                        .find("a").eq(0).focus()
                        .end();
                                  
                        if (elemParent.hasClass("haschild")){
                            elemParent.find("ul").eq(0).slideUp( options.effectSpeed );                            
                        }                                            
                        
                        if (elemParent.prev("li").hasClass("haschild")){
                            elemParent.prev("li").find("ul").eq(0).slideDown( options.effectSpeed );                            
                        }                           
                                  
                    }else{
                        
                        if (elemParent.prev().is("li")) break;
                        
                        if ( elemParent.closest("ul").closest("li").hasClass("haschild") && !elemParent.closest("ul").closest("li").hasClass("primary")  ){
                            elemParent.removeClass("ex-dropmenu-subitem-active")
                            .closest("ul")
                            .closest("li")
                            .addClass("ex-dropmenu-subitem-active")
                            .find("a:eq(0)").focus();                        
                            
                        }  
                        
                        if (elemParent.hasClass("haschild")){
                            elemParent.find("ul").eq(0).slideUp( options.effectSpeed );
                            elemParent.find("a span").removeClass("ex-dropmenu-icon-arrow-hover");
                        }
                        
                    }                 
                 
                    break;
                    
             
                case keyCode.UP:
                    
                    var elemUp = $(this).closest("li");
                    
                    
                    if (elemUp.hasClass("primary")) break;
                    
                    elemUp.removeClass("ex-dropmenu-subitem-active")
                    .find("a:eq(0) span:eq(0)").removeClass("") ;
                    
                    if ( elemUp.hasClass("haschild") ){
                        elemUp.find("ul").eq(0).slideUp( options.effectSpeed );
                        elemUp.find("a:eq(0) span:eq(0)").removeClass("ex-dropmenu-icon-arrow-hover") ;
                    }
                    
                    
                    if (elemUp.prev().is("li")){
                        
                        elemUp.prev("li").addClass("ex-dropmenu-subitem-active")
                        .find("a").eq(0).focus();
                     
                        if (elemUp.prev("li").hasClass("haschild")){
                            elemUp.prev("li").find("ul").eq(0).slideDown( options.effectSpeed )
                            elemUp.prev("li").find("a:eq(0) span:eq(0)").addClass("ex-dropmenu-icon-arrow-hover");
                        }      
                     
                    }else{
                        
                        if ( elemUp.closest("ul").closest("li").hasClass("primary") ){
                            elemUp.removeClass("ex-dropmenu-subitem-active")
                            .closest("ul")
                            .closest("li")
                            .find("a").eq(0)
                            .focus();
                        }else{
                            elemUp.removeClass("ex-dropmenu-subitem-active")
                            .closest("ul")
                            .closest("li").addClass("ex-dropmenu-subitem-active")
                            .find("a").eq(0)
                            .focus();
                        }
                        
                        
                         
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
                        
                        
                        if ( elemParent.is( ":last-child" ) ) break;
                        
                        
                        elemParent.removeClass("ex-dropmenu-subitem-active")
                        .next().addClass("ex-dropmenu-subitem-active")
                        .find("a:eq(0)")
                        .focus()
                        .find("span:eq(0)").addClass("ex-dropmenu-icon-arrow-hover");
                       
                        if ( elemParent.hasClass("haschild") ){
                            elemParent.find("ul").eq(0).slideUp( options.effectSpeed );  
                            elemParent.find("a:eq(0) span:eq(0)").removeClass("ex-dropmenu-icon-arrow-hover");
                        }
                       
                        if ( elemParent.next().hasClass("haschild") ){
                            elemParent.next().find("ul").eq(0).slideDown( options.effectSpeed );                                                        
                        }
                        
                        
                    }
                    
                    
                    break;
            }//end switch


        }


    });


})( jQuery );
