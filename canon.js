class Canon{
constructor(x,y,width,height,angle){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.angle = angle
}

display(){
    fill('#676e6a')
    push()
    translate(this.x,this.y)
    rotate (this.angle)
    rect(-10,-20,this.width,this.height)
    pop ()
    arc(this.x-30,this.y+90,75,100,PI,TWO_PI)
    // nofill()
}
 









}