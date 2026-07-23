// function passed into another function to run later

function greet(name,callback){
    console.log(`hello ${name}`)
    callback();
}

function saygoodbye(){
    console.log("goodbye")
}

// greet("om",saygoodbye)


function download(movie,callback){
    console.log(`${movie} is downloading......`)

    setTimeout(()=>{
        console.log("movies is downloaded.")
        callback()
    },2000)
}

function watch(){
    console.log("ready to watch movie")
}
download("saiyaraa",watch)
