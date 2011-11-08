(function( $ ) {
    
    var methods = {
     
        init : function( options ) {
            
            var settings = {
                'speedEffect' : 200
            }
            
            var listItens =  null;
                
            return this.each(function(){
        
                if ( options ) { 
                    $.extend( settings, options );
                }
                
                listItens = $(this).find("li");
                
                listItens.each(function(index){
                   
                   var valorCookie = $.cookie( "setor-" + $(this).attr("id") );
                   
                   if (valorCookie == 'true')
                    $(this).find("ul:eq(0)").show().end().addClass("expanded");
                   
                });
                
                
                listItens.addClass("directory").toggle(
                    function(){                                                       
                        $(this).find('ul:eq(0)').slideDown( settings.speedEffect  ).end().removeClass("collapsed").addClass("expanded");
                        
                        
                        var cookieName = "setor-" + $(this).attr("id");
                        
                        
                        $.cookie(cookieName, 'true');
                           
                    },
                    function(){                           
                        $(this).find('ul:eq(0)').slideUp( settings.speedEffect  ).end().removeClass("expanded").addClass("collapsed"); 
                        
                        var cookieName = "setor-" + $(this).attr("id");
                        
                        
                        $.cookie(cookieName, 'false');                    
                        
                    }
                   );        
                
                
                
                                                                 
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