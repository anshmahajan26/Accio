function saymyname(){
    console.log(this.name)
}
let user1={
    name:"om",
    saymyname
}
let user2={
    name:"ansh",
    saymyname
}

user1.saymyname()
user2.saymyname()