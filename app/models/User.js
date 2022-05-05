class User{
    constructor(id, username, name, bio, dateCreated, lastUpdated){
    this.id = id
    this.username = username
    this.name = name
    this.bio = bio
    this.dateCreated = new Date()
    this.lastUpdated = new Date()
    }

    get getUsername(){
        return this.username
    }

    get getId(){
        return this.id
    }

    get getName(){
        return this.name
    }

    get getBio(){
        return this.bio
    }
    set setBio(newBio){
        this.bio = newBio
    }
    set setUsername(newUsername){
        this.Username = newUsername
    }
}

module.exports= User