define(['underscore'], function () {
   // var styles = "";
    //console.log(localStorage.getItem('mifosX.Language'));
    if(localStorage.getItem('mifosX.Language') == '{"name":"Arabic","code":"ar"}'){
        var styles = {
            css: [
                'fontawesome.8f41798f.css',
                'rtl-styles.css'
                ]
        };
    }else{
        var styles = {
            css: [
                'fontawesome.8f41798f.css',
                'styles.985bbaad.css'
                ]
        };
    }
    

    require(_.reduce(_.keys(styles), function (list, pluginName) {
        return list.concat(_.map(styles[pluginName], function (stylename) {
            return pluginName + '!styles/' + stylename;
        }));
    }, []));
});
