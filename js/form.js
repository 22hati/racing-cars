class Form {
  constructor() {
    this.input = createInput("name"); 
    this.button = createButton('Play');
    this.greeting = createElement('h3'); 
  }

  display(){ 
    var title = createElement('h2') ;
    title.html("Car Racing Game"); 
    title.position(130, 0); 
    this.input.position(130, 160); 
    this.button.position(250, 200); 
    this.button.mousePressed(()=>{ 
        player.name = this.input.value(); 
        playerCount+=1; 
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount); 
        this.greeting.html("Hello " + player.name ) 
        this.greeting.position(130, 100) 
    }); 
  }
}