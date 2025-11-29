class Note
{
  constructor(x)
  { //Creates an note object, called in the setup
    this.x = x; //WILL NEVER CHANGE
    this.y = 100 * scaleToCanvas(true); //Initial y position
    this.size = 35 * scaleToCanvas(true); // general size of the note sprite used for detecting when it hits the top or bottom of the screen

    this.v = 0; //current velocity
    
    this.pV = h * 2 / 400; //rising velocity limit
    this.nV = h * -1.5 / 400; //falling velocity limit
    print(this.x + " " + this.y);
    
  }
  
  display(key)
  { //Plays every frame, called in draw() most likely
    if (key >= notesNum)
    {
      key = noteSprite.length - notesNum - (notesNum - key);
    }
    push(); 
    
    translate(this.x, this.y);
    scale(0.1);
    scale(scaleToCanvas());
    imageMode(CENTER);
    image(noteSprite[key], 0, 0);
    pop();
  }
  move(dir)
  { //Runs when the key for the note is pressed, called in keyPressed();
    
    if (dir == 1) //controls the direction and magnitude of this.v
    {
      if (this.v != this.pV)
      {
        this.v += this.pV / 10
      }
      if (this.v > this.pV)
      {
        this.v = this.pV; //IF this.v ever gets higher than this.pV, it just sets this.v to the rising limit
      }
    } else
    {
      if (this.v != this.nV)
      {
        this.v += this.nV / 10
      }
      if (this.v < this.nV)
      {
        this.v = this.nV; //IF this.v ever gets lwoer than this.nV, it just sets this.v to the falling limit
      }
    }
    
    
    this.y -= this.v; //updates this.y based on this.v and the canvas scale
    if (this.y > h - this.size / 2 || this.y < this.size / 2)
    {
      this.y += this.v;
      this.v = 0;
    }
    
    
  }
  
  
  
}


function keyCodeToKey(code) {
  return String.fromCharCode(code);
}