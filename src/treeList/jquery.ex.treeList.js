(function( $ ) {
    
    
    
    var methods = {
                    
        init : function( options ) {
            
            var settings = {
                'speedEffect' : 200,
                'script': ''                                
            }
                        
            var listAncoras = null;
            
    
            
            return this.each(function(){
        
                if ( options ) { 
                    $.extend( settings, options );
                }
                
                $(this).find("li").addClass("collapsed");
               
                listAncoras = $(this).find("a");
                
                listAncoras.live('click', function(){
                    
                    var itemList = $(this).closest("li");
                    
                    if ( itemList.hasClass("expanded") ){
                        
                        itemList.find('ul:eq(0)')
                                .slideUp( settings.speedEffect  ).end()
                                .removeClass("expanded")
                                .addClass("collapsed");   
                        
                    }else{
                        
                        if ( itemList.find('ul:eq(0)').length == 0 && settings.script != '' ){
                                                                                                                                           
                                itemList.addClass("wait");                                                                                
                            
                                var itemId = $(this).attr("id");
                            
                                methods.getRemoteData(settings, itemId);   
                                                           
                        }else{
                            
                            itemList.find( "ul:eq(0)" )
                            .slideDown( settings.speedEffect  ).end()
                            .removeClass( "collapsed" )
                            .addClass( "expanded" );
                            
                        }
                        
                    }
                                                                                
                });//end live(click)  
                                                                                                                                                         
            });//end each
        
            
            
            
        
        },//end init
        
        
        getRemoteData: function(settings, itemId){
            
            $.get( settings.script , {
                parameter : itemId
            },
                            
            function(data){
                                    
                $(".wait").append(data)
                .children('ul')
                .slideDown( settings.speedEffect  ).end()
                .removeClass("collapsed wait")
                .addClass("expanded");
                                    
            }, "html");            
            
        },
        
        expandeAllNodes: function(){
            
            return this.each(function(){
               
               $(this).find("li.collapsed > a").click();
               
            });
            
        },
        
        collapseAllNodes: function(novo){
            
          
            return this.each(function(){
               
               $(this).find("li.expanded > a").click();
               
            });
            
        }

    };
    //fim do method
       
       

    
    //define a inicialização do plugin
    $.fn.treeList = function( method ) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.TreeList' );
        }                 
    };
      
    
})( jQuery );

