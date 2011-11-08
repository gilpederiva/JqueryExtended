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
                
                listItens.addClass("directory").toggle(
                    function(){                                                       
                        $(this).find('ul:eq(0)').slideDown( settings.speedEffect  ).end().removeClass("collapsed").addClass("expanded"); 
                           
                    },
                    function(){                           
                        $(this).find('ul:eq(0)').slideUp( settings.speedEffect  ).end().removeClass("expanded").addClass("collapsed"); 
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