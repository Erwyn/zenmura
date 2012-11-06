function disPlayPics(){
	var photos = document.getElementById('galerie_mini');
	var liens = photo.getElementsByTagName('a');
	var small_photo = document.getElementById('small_pic');
	
	for(var i=0;i<lien.length;i++){
		liens[i].onclick = function(){
			small_photo.alt= this.href;
			return false;
		};
	}
}
window.onload = displayPics;

function ajout(nombre){
        
        var nombreNouveau = eval(nombre) + eval(1);
        var lien                 = document.getElementById('ajout');
        var div                  = document.getElementById('Div');
        var aAfficher
        
        lien.href = 'javascript:ajout(\'' + nombreNouveau + '\')';
        
        for (i = 0; i <= nombreNouveau; i++){
                aAfficher .= 'L\'élement n° ' + i + ' : <input type="file">'; 
        }
        
        div.innerHTML = aAfficher;
        
}