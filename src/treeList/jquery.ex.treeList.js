(function( $ ) {
    
    var methods = {
     
        init : function( options ) {
            
            var settings = {
                'speedEffect' : 200,
                'script': '',
                'anchorClass': '.classe',
                'parametro':'id' 
            }
                        
            var listAncoras = null;
                
            return this.each(function(){
        
                if ( options ) { 
                    $.extend( settings, options );
                }
                
               
                listAncoras = $(this).find("a"+settings.anchorClass);
                
                listAncoras.live('click', function(){
                    
                    var listItem = $(this).closest("li");
                    
                    if ( listItem.hasClass("expanded") ){
                        
                        listItem.find('ul:eq(0)').slideUp( settings.speedEffect  ).end().removeClass("expanded").addClass("collapsed");   
                        
                    }else{
                        
                        if ( listItem.find('ul:eq(0)').length == 0 ){
                            
                            listItem.addClass("loading");
                            
                            var vetor = $(this).attr("id").split("-");
                            var parametro = settings.parametro;
                            $.get( settings.script , {parametro : vetor[1] },
                            
                                function(data){
                                    
                                    $(".loading").append(data)
                                                 .children('ul')
                                                 .slideDown( settings.speedEffect  ).end()
                                                 .removeClass("collapsed loading")
                                                 .addClass("expanded");
                                    
                                }, "html");
                                
                        }else{
                            listItem.find( "ul:eq(0)" )
                                    .slideDown( settings.speedEffect  ).end()
                                    .removeClass( "collapsed" )
                                    .addClass( "expanded" );
                        }
                        
                    }
                                                                                
                });  
                                                                                                                                                         
            });
        
        }        
    };
    //fim dos métodos
       
    
    
    //define a inicialização do plugin
    $.fn.treeList = function( method ) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.fieldsetGP' );
        }                 
    };
      
    
})( jQuery );