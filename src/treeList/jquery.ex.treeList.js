/**
 * Tree List Jquery Plugin
 * 
 * @Author Gilberto Pederiva
 * @version 0.1
 *
 *
 * @Description: Transforma uma Lista HTML em uma estrutura de árvore 
 *
**/

(function( $ ) {
        
    
    var methods = {
                    
        init : function( options ) {
            
            var settings = {
                'speedEffect' : 200,
                'script': '',
                'persistent': false,
                'cookiePrefix':'tree_list_'
            }
                        
            var listAncoras = null;
            var listItems = null;
               
            return this.each(function(){
        
                if ( options ) { 
                    $.extend( settings, options );
                }
                
                $(this).find("li").addClass("collapsed");
               
                listItems = $(this).find("li");
                listAncoras = listItems.find("a");
                
                listAncoras.live('click', function(){
                    
                    var itemList = $(this).closest("li");
                    
                    if ( itemList.hasClass("expanded") ){
                        
                        itemList.find('ul:eq(0)')
                        .slideUp( settings.speedEffect  ).end()
                        .removeClass("expanded")
                        .addClass("collapsed");
                        
                        if (settings.persistent == true)
                            $.cookie( settings.cookiePrefix + itemList.attr("id"), null);
                        
                    }else{
                        
                        var itemId = itemList.attr("id");
                        
                        
                        if ( itemList.find('ul:eq(0)').length == 0 && settings.script != '' ){
                                                                                                                                           
                            itemList.addClass("wait");                                                                                
                                                                                       
                            methods.getRemoteData(settings, itemId); 
                            
                            if (settings.persistent == true)
                                $.cookie( settings.cookiePrefix + itemId, 'true');
                                                           
                        }else{
                            
                            itemList.find( "ul:eq(0)" )
                            .slideDown( settings.speedEffect  ).end()
                            .removeClass( "collapsed" )
                            .addClass( "expanded" );
                            
                            if (settings.persistent == true)
                                $.cookie( settings.cookiePrefix + itemId, 'true');
                            
                        }
                        
                    }
                                                                                
                });//end live(click)  
                
                /**
                 * Inicializa a lista conforme os dados armazenados no cookie
                 */                
                if (settings.persistent == true){                    
                
                    listItems.each(function(){
                   
                   
                        if ( $.cookie( settings.cookiePrefix + $(this).attr("id")  ) == 'true' ){
                        
                            $(this).find("a:eq(0)").click();                           
                        
                        }
                   
                    });                 
                    
                }
                                                                                                                                                                         
            });//end each
                                                    
        },//end init
        
        /**
         * Obtem dados remotamente
         */
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
        
        /**
         * Expande todos os itens da lista
         */
        expandeAllNodes: function(){
            
            return this.each(function(){
               
                $(this).find("li.collapsed > a").click();
               
            });
            
        },
        
        /*
         * Recolhe todos os itens da lista
         */
        collapseAllNodes: function(){
            
          
            return this.each(function(){
               
                $(this).find("li.expanded > a").click();
               
            });
            
        },
        
        /**
         * Expande um item específico da lista
         */
        expandeNode: function(nodeId){
            
            if ( $(nodeId).length <= 0){
                
                alert("Não existe esse Item!");
                return false;
                
            }            
            
            var node = $(nodeId);
            var parent = node.closest("ul");
                    
            while(!parent.hasClass("treeList")){
                
                node = node.closest("ul").closest("li");
                
                if ( !node.hasClass("expanded") ){
                    node.find("a:eq(0)").click();
                }
                
                parent = node.closest("ul");
                
            }            
                                    
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