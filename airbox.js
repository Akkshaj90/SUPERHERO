var canvas= new fabric.canvas('Mycanvas')
var player_x=10;
var player_y=10;
var playerimage="";
var blockimage="";
var blockheight=30;
var blockwidth=30;
function addPlayer(){
    fabric.Image.fromURL("player.png",function(Img){
        playerimage=Img;
        playerimage.scaleToWidth(150);
        playerimage.scaleToHeight(140);
        playerimage.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerimage);
    });
};
function addBlock(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockimage=Img;
        blockimage.scaleToHeight(blockheight);
        blockimage.scaleToWidth(blockwidth);
        blockimage.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockimage);
    });
};